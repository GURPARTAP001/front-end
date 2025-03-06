import React, { useEffect, useState } from 'react'; // Import React and hooks
import './Results.css'; // Import CSS for styling
import * as XLSX from 'xlsx'; // Import XLSX library for Excel file handling
import axios from "axios"; // Import axios for making HTTP requests

function Results() {
    const [data, setData] = useState([]); // State to hold the fetched data
    const [loading, setLoading] = useState(true); // State to manage loading status
    const [showEmailPopup, setShowEmailPopup] = useState(false); // State to control email popup visibility
    const [emailAddresses, setEmailAddresses] = useState(""); // State to hold email addresses input

    // Function to fetch CSV data from the server
    const fetchCSVData = async () => {
        setLoading(true); // Set loading to true before fetching data
        try {
            const response = await axios.post('http://localhost:5000/download', { path: "D:/OFFICE_PROJECT/backend/outputs/risk_report.csv" }, { responseType: 'blob' });

            // Create a URL for the blob and trigger a download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'result.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Read the CSV data for further processing
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const text = e.target.result;
                const rows = text.split("\n").map(row => row.split(","));
                const headers = rows[0]; // First row as headers
                const formattedData = rows.slice(1).map((row, index) => {
                    return headers.reduce((acc, header, i) => {
                        acc[header.trim()] = row[i]?.trim(); // Create an object for each row
                        return acc;
                    }, { id: index + 1 }); // Add an ID for each row
                });
                setData(formattedData);
                setLoading(false);
            };
            fileReader.readAsText(response.data);
        } catch (error) {
            console.error("Error fetching or reading the CSV file:", error);
            setLoading(false);
            if (error.response && error.response.data) {
                alert(error.response.data.error || 'An error occurred');
            } else {
                alert("Failed to connect to the API.");
            }
        }
    };

    // Function to handle downloading the data as an Excel file
    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(data); // Convert JSON data to a worksheet
        const workbook = XLSX.utils.book_new(); // Create a new workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Results'); // Append the worksheet to the workbook
        XLSX.writeFile(workbook, 'results.xlsx'); // Write the workbook to a file
    };

    // useEffect(() => {
    //     fetchCSVData(); // Fetch data when the component mounts
    // }, []);

    // Function to open the email popup
    const handleOpenEmailPopup = () => {
        setShowEmailPopup(true); // Set the popup visibility to true
    };

    // Function to close the email popup
    const handleCloseEmailPopup = () => {
        setShowEmailPopup(false); // Set the popup visibility to false
    };

    // Function to send email addresses to the server
    const handleSendEmail = async () => {
        const emailList = emailAddresses.split(',').map(email => email.trim()); // Split and trim email addresses

        // Validate email addresses
        if (emailList.length === 0 || emailList.some(email => email === "")) {
            alert("Please enter at least one valid email address."); // Alert if no valid email
            return; // Exit the function
        }

        try {
            // Make a POST request to send email addresses
            await axios.post("http://localhost:5000/mail", {
                path: "D:/OFFICE_PROJECT/backend/outputs/risk_report.csv",
                mails: emailList, // Send the list of email addresses
            });
            alert("Email sent successfully!"); // Alert on success
            setShowEmailPopup(false); // Close the popup
        } catch (error) {
            console.error("Error sending email:", error); // Log any errors
            alert("Failed to send email."); // Alert on failure
        }
    };

    return (
        <div className="results-container"> {/* Main container for results */}
            <div className="results-header"> {/* Header section */}
                <h2>Results</h2> {/* Title */}
            </div>
            <div className='main-table-container'> {/* Container for the main table */}
                <div className="results-table-container1"> {/* Table container */}
                    <div className='results-table-container1-heading'> {/* Heading for the table */}
                        <div>
                            <h2>Risk Report</h2> {/* Subtitle */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> {/* Description */}
                        </div>
                        <div className="button-group"> {/* Button group for actions */}
                            <button className="download-btn" onClick={handleDownload}> {/* Download button */}
                                <i className="fas fa-download"></i> Download
                            </button>
                            <button className="refresh-btn" onClick={fetchCSVData}> {/* Refresh button */}
                                Refresh Data
                            </button>
                            <button className="email-btn" onClick={handleOpenEmailPopup}> {/* Email button */}
                                Email
                            </button>
                        </div>
                    </div>
                    <div className='results-table-container1-heading-table'> {/* Table for displaying results */}
                        {loading ? (
                            <p>Loading...</p> // Show loading message while data is being fetched
                        ) : (
                            <table className="results-table1"> {/* Table element */}
                                <thead>
                                    <tr>
                                        {data.length > 0 && Object.keys(data[0]).map((key) => ( // Render table headers
                                            <th key={key}>{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => ( // Render table rows
                                        <tr key={item.id}>
                                            {Object.values(item).map((value, index) => ( // Render table cells
                                                <td key={index}>{value}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

            {/* Email Popup Modal */}
            {showEmailPopup && ( // Conditionally render the email popup
                <div className="email-popup"> {/* Popup container */}
                    <div className="email-popup-content"> {/* Content of the popup */}
                        <h3>Enter Email Addresses</h3> {/* Popup title */}
                        <p>Enter the email addresses separated by commas:</p> {/* Instructions */}
                        <input
                            type="text"
                            value={emailAddresses} // Bind input value to state
                            onChange={(e) => setEmailAddresses(e.target.value)} // Update state on input change
                            placeholder="example1@gmail.com, example2@yahoo.com" // Placeholder text
                        />
                        <div className="popup-buttons"> {/* Button group for popup actions */}
                            <button onClick={handleSendEmail} className="send-btn">Send Email</button> {/* Send button */}
                            <button onClick={handleCloseEmailPopup} className="close-btn">Cancel</button> {/* Cancel button */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Results; // Export the Results component
