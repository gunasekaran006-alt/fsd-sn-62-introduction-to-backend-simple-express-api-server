# Simple Express API Server

A minimal and flexible Node.js backend server built using ExpressJS to handle basic routes and return JSON data.

## 🚀 Features
- **Server Instance:** Created using ExpressJS.
- **Routing:** Basic GET routes for root and API information.
- **JSON Response:** Returns data in structured JSON format.
- **Auto-Restart:** Configured with Nodemon for a better developer experience.

## 🛠️ Tech Stack
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web framework for Node.js
- **Nodemon** - Development tool to auto-restart server

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd simple-express-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server in development mode:**
   ```bash
   npm run dev
   ```

## 📍 API Endpoints
- `GET /` - Welcome message
- `GET /api/info` - Returns server and course information in JSON format

## 📂 Project Structure
- `main.js` - Main entry point of the server
- `package.json` - Project metadata and dependencies
- `.gitignore` - Files to be ignored by Git (node_modules)
