// Filepath: D:\OFFICE_PROJECT\work\server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process'); // To open Outlook
const { processExcelFiles } = require('./mlAlgorithm'); // Import ML processing function

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Set up storage for Multer (File Uploads)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files in 'uploads/' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename with timestamp
    }
});

const upload = multer({ storage: storage });

// Upload endpoint
app.post('/upload', upload.array('files', 6), async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    try {
        // Process uploaded Excel files
        const outputFilePath = await processExcelFiles(req.files.map(file => file.path));

        // Respond with the processed file path
        res.json({ message: 'Files processed successfully!', outputFile: outputFilePath });
    } catch (error) {
        res.status(500).send('Error processing files: ' + error.message);
    }
});

app.get('/open-outlook', (req, res) => {
    const filePath = path.resolve(__dirname, 'uploads', 'results.xlsx');

    const outlookPath = `"C:\\Program Files\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE"`; // Update if different
    const recipient = "recipient@example.com";
    const subject = "Risk Report";
    const body = "Please find the attached processed report.";

    // Command with full path
    const command = `${outlookPath} /a "${filePath}" /m "${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}"`;

    exec(command, (error) => {
        if (error) {
            console.error("Error opening Outlook:", error);
            return res.status(500).send("Failed to open Outlook.");
        }
        res.send("Outlook opened with attachment.");
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
