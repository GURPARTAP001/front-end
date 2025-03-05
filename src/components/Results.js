// import React, { useEffect, useState } from 'react';
// import './Results.css'; // Import CSS for styling
// import * as XLSX from 'xlsx'; // Import the xlsx library
// import axios from "axios";

// function Results() {
//     const [data, setData] = useState([]); // State to hold the data from the CSV file
//     const [loading, setLoading] = useState(true); // State to manage loading status

//     const fetchCSVData = async () => {
//         setLoading(true); // Set loading to true when fetching data
//         try {
//             const response = await axios.get("http://localhost:5000/api/results", {
//                 responseType: "blob", // Get the response as a blob
//             });

//             const fileReader = new FileReader();
//             fileReader.onload = (e) => {
//                 const text = e.target.result;
//                 const rows = text.split("\n").map(row => row.split(","));
//                 const headers = rows[0]; // First row as headers
//                 const formattedData = rows.slice(1).map((row, index) => {
//                     return headers.reduce((acc, header, i) => {
//                         acc[header.trim()] = row[i]?.trim(); // Create an object for each row
//                         return acc;
//                     }, { id: index + 1 }); // Add an ID for each row
//                 });
//                 setData(formattedData);
//                 setLoading(false);
//             };
//             fileReader.readAsText(response.data);
//         } catch (error) {
//             console.error("Error fetching or reading the CSV file:", error);
//             setLoading(false);
//         }
//     };

//     const handleDownload = () => {
//         const worksheet = XLSX.utils.json_to_sheet(data);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, 'Results');
//         XLSX.writeFile(workbook, 'results.xlsx'); // Download the file
//     };

//     useEffect(() => {
//         fetchCSVData(); // Fetch data when the component mounts
//     }, []);

//     const handleEmail = async () => {
//         try {
//             await axios.get("http://localhost:5000/open-outlook");
//             alert("Outlook opened with the attached processed CSV file.");
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Failed to open Outlook.");
//         }
//     };

//     return (
//         <div className="results-container">
//             <div className="results-header">
//                 <h2>Results</h2>
//             </div>
//             <div className='main-table-container'>
//                 <div className="results-table-container1">
//                     <div className='results-table-container1-heading'>
//                         <div>
//                             <h2>Risk Report</h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//                         </div>
//                         <div className="button-group">
//                             <button className="download-btn" onClick={handleDownload}>
//                                 <i className="fas fa-download"></i> Download
//                             </button>
//                             <button className="refresh-btn" onClick={fetchCSVData}>
//                                 Refresh Data
//                             </button>
//                             <button className="email-btn" onClick={handleEmail}>
//                                 Email
//                             </button>
//                         </div>
//                     </div>
//                     <div className='results-table-container1-heading-table'>
//                         <table className="results-table1">
//                             <thead>
//                                 <tr>
//                                     {data.length > 0 && Object.keys(data[0]).map((key) => (
//                                         <th key={key}>{key}</th>
//                                     ))}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data.map(item => (
//                                     <tr key={item.id}>
//                                         {Object.values(item).map((value, index) => (
//                                             <td key={index}>{value}</td>
//                                         ))}
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Results;


import React, { useEffect, useState } from 'react';
import './Results.css';
import * as XLSX from 'xlsx';
import axios from "axios";

function Results() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [emailAddresses, setEmailAddresses] = useState("");

    const fetchCSVData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:5000/api/results", {
                responseType: "blob",
            });

            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const text = e.target.result;
                const rows = text.split("\n").map(row => row.split(","));
                const headers = rows[0];
                const formattedData = rows.slice(1).map((row, index) => {
                    return headers.reduce((acc, header, i) => {
                        acc[header.trim()] = row[i]?.trim();
                        return acc;
                    }, { id: index + 1 });
                });
                setData(formattedData);
                setLoading(false);
            };
            fileReader.readAsText(response.data);
        } catch (error) {
            console.error("Error fetching or reading the CSV file:", error);
            setLoading(false);
        }
    };

    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Results');
        XLSX.writeFile(workbook, 'results.xlsx');
    };

    useEffect(() => {
        fetchCSVData();
    }, []);

    const handleOpenEmailPopup = () => {
        setShowEmailPopup(true);
    };

    const handleCloseEmailPopup = () => {
        setShowEmailPopup(false);
    };

    const handleSendEmail = async () => {
        const emailList = emailAddresses.split(',').map(email => email.trim());

        if (emailList.length === 0 || emailList.some(email => email === "")) {
            alert("Please enter at least one valid email address.");
            return;
        }

        try {
            await axios.post("http://localhost:5000/send-email", {
                emails: emailList,
            });
            alert("Email sent successfully!");
            setShowEmailPopup(false);
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email.");
        }
    };

    return (
        <div className="results-container">
            <div className="results-header">
                <h2>Results</h2>
            </div>
            <div className='main-table-container'>
                <div className="results-table-container1">
                    <div className='results-table-container1-heading'>
                        <div>
                            <h2>Risk Report</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="button-group">
                            <button className="download-btn" onClick={handleDownload}>
                                <i className="fas fa-download"></i> Download
                            </button>
                            <button className="refresh-btn" onClick={fetchCSVData}>
                                Refresh Data
                            </button>
                            <button className="email-btn" onClick={handleOpenEmailPopup}>
                                Email
                            </button>
                        </div>
                    </div>
                    <div className='results-table-container1-heading-table'>
                        <table className="results-table1">
                            <thead>
                                <tr>
                                    {data.length > 0 && Object.keys(data[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => (
                                    <tr key={item.id}>
                                        {Object.values(item).map((value, index) => (
                                            <td key={index}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Email Popup Modal */}
            {showEmailPopup && (
                <div className="email-popup">
                    <div className="email-popup-content">
                        <h3>Enter Email Addresses</h3>
                        <p>Enter the email addresses separated by commas:</p>
                        <input
                            type="text"
                            value={emailAddresses}
                            onChange={(e) => setEmailAddresses(e.target.value)}
                            placeholder="example1@gmail.com, example2@yahoo.com"
                        />
                        <div className="popup-buttons">
                            <button onClick={handleSendEmail} className="send-btn">Send Email</button>
                            <button onClick={handleCloseEmailPopup} className="close-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Results;

