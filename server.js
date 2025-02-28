// Filepath: D:\OFFICE_PROJECT\work\server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const { processExcelFiles } = require('./mlAlgorithm'); // Import your ML processing function

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Set up storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the file name
    }
});

// Initialize Multer
const upload = multer({ storage: storage });

// Create an endpoint for file uploads
app.post('/upload', upload.array('files', 5), async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    try {
        // Process all uploaded files together
        const outputFilePath = await processExcelFiles(req.files.map(file => file.path)); // Process all files and get the output file path

        // Respond with the path to the generated output file
        res.json({ message: 'Files processed successfully!', outputFile: outputFilePath }); // Respond with the output file path
    } catch (error) {
        res.status(500).send('Error processing files: ' + error.message);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
