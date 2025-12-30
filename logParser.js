// logParser.js - Flexible Nginx Log Parser

class NginxLogParser {
  constructor(customFormat = null) {
    // Common nginx log formats
    this.formats = {
      default: {
        pattern: /^(\S+) \S+ \S+ \[([^\]]+)\] "([^"]*)" (\d+) (\d+) "([^"]*)" "([^"]*)" "([^"]*)"/,
        fields: ['ip', 'timestamp', 'request', 'status', 'bytes', 'referer', 'userAgent', 'xff']
      },
      custom_with_times: {
        pattern: /^(\S+) (.+?) (\S+) \[([^\]]+)\] "([^"]*)" (\d+) (\d+) ([\d\.]+|-) ([\d\.]+|-) "([^"]*)" "([^"]*)" (\S+) (\S+)$/,
        fields: ['ip', 'proxyAddr', 'remoteUser', 'timestamp', 'request', 'status', 'bytes', 'requestTime', 'upstreamTime', 'referer', 'userAgent', 'host', 'requestId']
      },
      combined: {
        pattern: /^(\S+) (\S+) (\S+) \[([^\]]+)\] "([^"]*)" (\d+) (\d+) "([^"]*)" "([^"]*)"/,
        fields: ['ip', 'remoteUser', 'proxy', 'timestamp', 'request', 'status', 'bytes', 'referer', 'userAgent']
      }
    };

    // Add custom format if provided
    if (customFormat) {
      this.addCustomFormat(customFormat);
    }
  }

  // Add custom format from environment variable
  addCustomFormat(formatString) {
    try {
      const { pattern, fields } = JSON.parse(formatString);
      this.formats.custom = {
        pattern: new RegExp(pattern),
        fields: fields
      };
      console.log('Custom log format loaded from environment');
    } catch (error) {
      console.warn('Failed to parse custom log format:', error.message);
    }
  }

  // Auto-detect log format from first valid line
  detectFormat(lines) {
    for (const line of lines) {
      if (!line.trim()) continue;
      
      // Check custom format first if available
      if (this.formats.custom) {
        if (this.formats.custom.pattern.test(line)) {
          return 'custom';
        }
      }

      for (const [formatName, format] of Object.entries(this.formats)) {
        if (formatName === 'custom') continue; // Already checked
        if (format.pattern.test(line)) {
          return formatName;
        }
      }
    }
    return 'default'; // fallback
  }

  // Parse a single log line
  parseLine(logLine, formatName = 'default') {
    const format = this.formats[formatName];
    if (!format) return null;

    const parts = logLine.match(format.pattern);
    if (!parts) return null;

    // Build object with detected fields
    const logObj = {};
    for (let i = 0; i < format.fields.length; i++) {
      logObj[format.fields[i]] = parts[i + 1] || '';
    }

    // Extract request method and path
    const request = logObj.request || '';
    const requestParts = request.split(' ');
    const method = requestParts[0] || 'UNKNOWN';
    const path = requestParts[1] || '/';

    return {
      ip: logObj.ip || logObj.proxyAddr || '-',
      timestamp: logObj.timestamp || '',
      method: method,
      path: path,
      status: parseInt(logObj.status) || 0,
      bytes: parseInt(logObj.bytes) || 0,
      userAgent: logObj.userAgent || '-',
      referer: logObj.referer || '-',
      requestTime: logObj.requestTime || null,
      upstreamTime: logObj.upstreamTime || null,
      host: logObj.host || '-',
      requestId: logObj.requestId || '-',
      fullRequest: request
    };
  }

  // Parse multiple lines
  parseLines(lines) {
    const formatName = this.detectFormat(lines);
    const logs = [];
    let failedCount = 0;

    for (const line of lines) {
      if (!line.trim()) continue;
      const log = this.parseLine(line, formatName);
      if (log) {
        logs.push(log);
      } else {
        failedCount++;
      }
    }

    console.log(`Parsed ${logs.length} logs, failed ${failedCount} lines with format: ${formatName}`);
    return { logs, format: formatName };
  }
}

module.exports = NginxLogParser;