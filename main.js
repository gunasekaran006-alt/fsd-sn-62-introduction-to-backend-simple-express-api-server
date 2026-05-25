// Import express library
const express = require("express");

// Create an app instance
const app = express();

// Define the port number
const PORT = 3000; 

// Middleware to parse JSON data (Required for handling JSON requests)
app.use(express.json());

// Sample JSON Data
const serverInfo = {
    course: "Full Stack Development",
    topic: "fsd-sn-62-introduction-to-backend-simple-express-api-server",
    status: "Active"
};

// Route 1: Root Route (Returns string response)
app.get('/', (req, res) => {
    res.send("Welcome to the Simple Express API Server!");
});

// Route 2: API Route (Returns JSON response)
app.get('/api/info', (req, res) => {
    res.json({
        success: true,
        message: "Data fetched successfully",
        data: serverInfo
    });
});

// Start the Express Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});