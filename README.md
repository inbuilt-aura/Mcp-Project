# MCP Filesystem Client

A **Model Context Protocol (MCP)** server implementation for filesystem operations with an integrated web-based client interface.

## 📋 Task Overview

**Task 2: MCP Basics**

Create an MCP server to perform filesystem operations. The server should support tools to create, edit, and delete files within a specified folder. Develop an MCP client and integrate it into a simple frontend application. Users should be able to upload a folder and use a prompt box to specify edits to the files.

## ✨ Features

- 🔧 **MCP Server** - Full filesystem operations support
- 📁 **File Management** - Create, edit, delete, and read files
- 📤 **File Upload** - Drag & drop or click to upload multiple files
- 💻 **Web Interface** - Clean, modern UI with real-time feedback
- ⌨️ **Command Prompt** - Text-based commands for all operations
- 📊 **File Listing** - View all files in the managed directory

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Mcp-Project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server** (serves both backend and frontend)

   ```bash
   node server.js
   ```

4. **Open the client**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   or
   ```
   http://localhost:3000/index.html
   ```

## 🔧 MCP Server API

The server runs on `http://localhost:3000` and serves both the web interface and API endpoints:

- **Frontend**: `http://localhost:3000` or `http://localhost:3000/index.html`
- **API Endpoints**: Available at the same port

### File Operations (`POST /mcp`)

| Command  | Description        | Example                        |
| -------- | ------------------ | ------------------------------ |
| `create` | Create a new file  | `create hello.txt Hello World` |
| `edit`   | Edit existing file | `edit hello.txt New content`   |
| `delete` | Delete a file      | `delete hello.txt`             |
| `read`   | Read file content  | `read hello.txt`               |

### Additional Endpoints

- `POST /upload` - Upload files via form data
- `GET /list` - List all files in the directory

## 💻 Web Client Usage

### 1. File Upload

- **Drag & Drop**: Simply drag files from your computer onto the drop zone
- **Click Upload**: Click the drop zone to open file picker and select multiple files

### 2. Command Interface

Use the command prompt to perform MCP operations:

```bash
# Create a new file
create myfile.txt This is the content

# Edit an existing file
edit myfile.txt Updated content here

# Read a file
read myfile.txt

# Delete a file
delete myfile.txt

# List all files
list
```

### 3. Real-time Feedback

- ✅ Success messages in green
- ❌ Error messages in red
- 📄 Automatic file list updates
- 📊 File size information

## 📁 Project Structure

```
Mcp-Project/
├── server.js          # MCP server implementation
├── index.html         # Web client interface
├── package.json       # Dependencies and scripts
├── files/            # Managed files directory
│   ├── document.pdf
│   └── (uploaded files)
└── README.md         # This file
```

## 🔧 Technical Implementation

### Server (Node.js + Express)

- **Framework**: Express.js with static file serving
- **File Upload**: Multer middleware
- **CORS**: Enabled for cross-origin requests
- **File Operations**: Node.js fs/promises API
- **Static Files**: Serves HTML/CSS/JS from root directory

### Client (HTML + JavaScript)

- **Modern UI**: CSS3 with gradients and animations
- **Drag & Drop**: HTML5 File API
- **AJAX**: Fetch API for server communication
- **Responsive**: Container-based layout

### Key Features

1. **MCP Protocol Implementation**

   - RESTful API design
   - JSON-based communication
   - Error handling and validation

2. **File Management**

   - Safe file operations within designated folder
   - Support for text and binary files
   - Automatic directory creation

3. **User Interface**
   - Professional container-based design
   - Real-time file listing
   - Command suggestions and help
   - Served directly by the Express server

## 📝 API Response Format

### Success Response

```json
{
  "message": "File created successfully",
  "filename": "example.txt"
}
```

### Error Response

```json
{
  "error": "File not found"
}
```

### File List Response

```json
{
  "files": ["file1.txt", "file2.pdf", "document.pdf"]
}
```

## 🛡️ Security Features

- Files are contained within the `files/` directory
- Input validation on all operations
- Safe filename handling
- Error boundaries for all operations

## 🎯 MCP Requirements Compliance

✅ **MCP Server**: Implements filesystem tools (create, edit, delete)  
✅ **Specified Folder**: All operations within `files/` directory  
✅ **Frontend Integration**: Modern web-based client  
✅ **File Upload**: Drag & drop and click upload functionality  
✅ **Prompt Interface**: Command-based file operations

## 🔄 Development

### Adding New Commands

1. Add endpoint handler in `server.js`
2. Update client JavaScript in `index.html`
3. Add command documentation in the help section

### Extending File Support

The server supports all file types. Text files can be edited via commands, while binary files can be uploaded and downloaded.

## 📦 Dependencies

```json
{
  "express": "^5.1.0",
  "cors": "^2.8.5",
  "multer": "^1.4.5-lts.1"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

**Built with ❤️ for MCP Basics Task**
