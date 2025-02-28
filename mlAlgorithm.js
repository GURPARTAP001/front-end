// Filepath: D:\OFFICE_PROJECT\work\mlAlgorithm.js
const xlsx = require('xlsx'); // Make sure to install xlsx package
const path = require('path'); // For handling file paths
const fs = require('fs'); // For file system operations

async function processExcelFiles(filePaths) {
    const combinedData = []; // Array to hold combined data from all sheets

    for (const filePath of filePaths) {
        // Read the Excel file
        const workbook = xlsx.readFile(filePath);
        
        // Loop through all sheets in the workbook
        for (const sheetName of workbook.SheetNames) {
            const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]); // Convert to JSON
            combinedData.push(...data); // Combine data from all sheets
        }
    }

    // Process the combined data with your ML algorithm
    const results = await runYourMLAlgorithm(combinedData); // Replace with your ML processing logic

    // Generate an output Excel file with the results
    const outputFilePath = path.join(__dirname, 'output.xlsx'); // Define output file path
    const outputWorkbook = xlsx.utils.book_new(); // Create a new workbook
    const outputWorksheet = xlsx.utils.json_to_sheet(results); // Convert results to a worksheet
    xlsx.utils.book_append_sheet(outputWorkbook, outputWorksheet, 'Results'); // Append the worksheet to the workbook
    xlsx.writeFile(outputWorkbook, outputFilePath); // Write the workbook to a file

    return outputFilePath; // Return the path of the generated Excel file
}

async function runYourMLAlgorithm(data) {
    // Implement your ML logic here
    // For example, you could use a pre-trained model to make predictions
    return data; // Return processed results
}

module.exports = { processExcelFiles };
