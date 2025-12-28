# 🚀 Nginx Log Analyzer

<img width="3810" height="1704" alt="image" src="https://github.com/user-attachments/assets/56323f96-a891-4728-b5c3-c6586c4250c7" />

A powerful, lightweight, and privacy-focused web-based tool for analyzing nginx access logs. No installation required, no backend needed - everything runs in your browser!

Try it now!

[https://emirhankolver.github.io/nginx-log-analyzer](https://emirhankolver.github.io/nginx-log-analyzer)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📸 Screenshots

### Main Dashboard
<img width="3456" height="1772" alt="image" src="https://github.com/user-attachments/assets/0f6ad4dd-0508-4d9b-98b1-d4e26f8498bb" />

*Overview with key metrics and status distribution*

### Log Table with Search
<img width="3456" height="1772" alt="image" src="https://github.com/user-attachments/assets/3f025f55-bf2e-4f00-a657-d2e968cfc8bc" />

*Interactive table with sorting and search capabilities*

### Detailed Log View
<img width="3456" height="1772" alt="image" src="https://github.com/user-attachments/assets/7afa6d58-e3d7-4c8e-846d-0fb1edd2524a" />

*Comprehensive log entry details with IP statistics*

### Malicious & Suspicious Requests
<img width="1792" height="1532" alt="image" src="https://github.com/user-attachments/assets/df296b4d-03bc-4938-8e6d-1fa56c2b90a5" />

*Framework exploit attempts and sources by IP Addresses*

### IP Address Statistics
<img width="1792" height="1532" alt="image" src="https://github.com/user-attachments/assets/bc9d568d-fd31-416b-90a2-a8f34b7e6b8c" />

*Framework exploit attempts and sources by IP Addresses*


## ✨ Features

### 📊 Comprehensive Statistics
- **Total requests** count
- **Unique IP addresses** tracking
- **Success rate** percentage calculation
- **Malicious request** detection

### 📈 Visual Analytics
- Status code distribution with progress bars
- Top accessed endpoints
- Request method breakdown
- User agent analysis

### 🔍 Advanced Search & Filtering
- Real-time search across all log fields
- Search by IP address, path, method, user agent, or status code
- Instant results filtering

### 📋 Interactive Data Table
- Sortable columns (IP, Timestamp, Method, Path, Status, Bytes)
- Pagination for large log files
- Clean, responsive design

### 🔎 Detailed Log Analysis
- Click any log entry to see detailed information
- Complete request/response data
- IP-specific statistics
- Success/error breakdown per IP
- Endpoint access patterns

### 🛡️ Security Features
- Automatic detection of PHP exploit attempts
- Identification of blocked requests
- Security threat highlighting
- Suspicious pattern recognition

### 🔒 Privacy First
- **100% client-side processing** - no data leaves your browser
- No backend server required
- No data collection or tracking
- Works completely offline after initial load

## 🚀 Quick Start

### Option 1: Direct Download
1. Download the `nginx-log-analyzer.html` file
2. Open it in any modern web browser
3. Paste your nginx logs or upload a log file
4. Click "Analyze Logs"

### Option 2: Clone Repository
```bash
git clone https://github.com/emirhankolver/nginx-log-analyzer.git
cd nginx-log-analyzer
# Open index.html in your browser
```

### Option 3: Use Online
Visit the live demo: [https://emirhankolver.github.io/nginx-log-analyzer](https://emirhankolver.github.io/nginx-log-analyzer)

## 📖 Usage

1. **Get Your Logs**: Export your nginx access logs
   ```bash
   # Example: Get last 1000 lines from nginx access log
   tail -n 1000 /var/log/nginx/access.log
   ```

2. **Paste or Upload**: Copy the logs and paste them into the text area

3. **Analyze**: Click the "Analyze Logs" button

4. **Explore**:
    - View statistics in the dashboard
    - Search and filter logs
    - Sort by any column
    - Click "Details" to see complete information

## 🎯 Supported Log Format

The tool supports standard nginx log format (combined):
```
$remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent" "$http_x_forwarded_for"
```

Example:
```
110.220.239.137 - - [26/Dec/2025:18:50:08 +0000] "GET /hello HTTP/1.1" 200 48 "-" "curl/8.5.0" "94.145.110.200"
```

## 🔧 Technologies Used

- **HTML5** - Structure
- **TailwindCSS** - Styling
- **Vanilla JavaScript** - Logic and interactivity
- **Font Awesome** - Icons
- **No frameworks** - Fast and lightweight

## 🌟 Key Highlights

- ⚡ **Lightning Fast** - Process thousands of logs instantly
- 🎨 **Beautiful UI** - Modern, clean interface with dark mode support
- 📱 **Responsive** - Works on desktop, tablet, and mobile
- 🔓 **No Installation** - Just open and use
- 🆓 **100% Free** - Open source and always will be
- 🔐 **Secure** - Your data never leaves your device

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- Add support for custom log formats
- Export analysis results to PDF/CSV
- Add more security detection patterns
- Create data visualizations (charts/graphs)
- Add log comparison features
- Implement dark mode
- Add internationalization (i18n)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Your browser version
- Steps to reproduce
- Expected vs actual behavior
- Sample log data (if applicable)

## 💡 Feature Requests

Have an idea? Open an issue with the `enhancement` label and describe:
- The feature you'd like
- Why it would be useful
- How it should work

## 🙏 Acknowledgments

- Built with ❤️ for the DevOps community
- Inspired by the need for quick, secure log analysis
- Thanks to all contributors and users!

## 📬 Contact

- GitHub: [@emirhankolver](https://github.com/emirhankolver)
- Issues: [GitHub Issues](https://github.com/emirhankolver/nginx-log-analyzer/issues)

## ⭐ Show Your Support

If you find this tool useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with others
- 🤝 Contributing code

---

**Made with ❤️ for developers who love clean, simple, and powerful tools.**

*No servers, no tracking, no BS - just pure client-side log analysis.* 🎯
