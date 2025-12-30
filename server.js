// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const NginxLogParser = require('./logParser');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize parser with custom format from environment if available
const customFormat = process.env.NGINX_LOG_FORMAT;
const parser = new NginxLogParser(customFormat);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API endpoint to read log file
app.post('/api/logs/read', (req, res) => {
  try {
    const { filePath } = req.body;
    
    if (!filePath) {
      return res.status(400).json({ error: 'filePath is required' });
    }

    // Security: Prevent path traversal attacks
    const resolvedPath = path.resolve(filePath);
    
    // Check if file exists
    if (!fs.existsSync(resolvedPath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Check if it's a file (not directory)
    if (!fs.statSync(resolvedPath).isFile()) {
      return res.status(400).json({ error: 'Path is not a file' });
    }

    // Read file with size limit (100MB)
    const stats = fs.statSync(resolvedPath);
    if (stats.size > 100 * 1024 * 1024) {
      return res.status(413).json({ error: 'File too large (max 100MB)' });
    }

    const content = fs.readFileSync(resolvedPath, 'utf-8');
    const lines = content.trim().split('\n');
    
    // Parse logs with auto-detection
    const { logs, format } = parser.parseLines(lines);
    
    res.json({ 
      success: true,
      logs: logs,
      fileName: path.basename(resolvedPath),
      fileSize: stats.size,
      detectedFormat: format,
      totalLines: lines.length,
      validLogs: logs.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API endpoint to list available logs from environment variables
app.get('/api/logs/list', (req, res) => {
  try {
    const accessLogPath = process.env.ACCESS_LOG_PATH || '/var/log/nginx/access.log';
    const errorLogPath = process.env.ERROR_LOG_PATH || '/var/log/nginx/error.log';
    
    const availableLogs = [];

    // Check configured log paths
    const checkPaths = [accessLogPath, errorLogPath];

    checkPaths.forEach(logPath => {
      if (fs.existsSync(logPath)) {
        availableLogs.push({
          path: logPath,
          name: path.basename(logPath),
          size: fs.statSync(logPath).size
        });
      }
    });

    res.json({ logs: availableLogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});