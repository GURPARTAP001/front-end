

// // Filepath: D:\OFFICE_PROJECT\work\src\components\Results.js
// import React from 'react';
// import './Results.css'; // Import CSS for styling

// function Results() {
//     // Sample data for the table
//     const data = [
//         { id: 1, name: 'Item 1', value: 'Value 1' },
//         { id: 2, name: 'Item 2', value: 'Value 2' },
//         { id: 3, name: 'Item 3', value: 'Value 3' },
//         { id: 4, name: 'Item 4', value: 'Value 4' },
//         { id: 5, name: 'Item 5', value: 'Value 5' },
//         { id: 6, name: 'Item 6', value: 'Value 6' },
//         { id: 7, name: 'Item 7', value: 'Value 7' },
//         { id: 8, name: 'Item 8', value: 'Value 8' },
//         { id: 9, name: 'Item 9', value: 'Value 9' },
//         { id: 10, name: 'Item 10', value: 'Value 10' },
//     ];

//     return (
//         <div className="results-container">
//             <div className="results-header">
//                 <h2>Results</h2>
//                 <p>This section displays the results of your data processing.</p>
//             </div>
//             <div className='main-table-container'>
//                 <div className="results-table-container1">
//                     <h2>Final Report</h2>
//                     <table className="results-table1">
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Name</th>
//                                 <th>Value</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map(item => (
//                                 <tr key={item.id}>
//                                     <td>{item.id}</td>
//                                     <td>{item.name}</td>
//                                     <td>{item.value}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>


//                 {/* <div className="results-table-container2">
//                     <h2>Risk Report</h2>
//                     <table className="results-table2">
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Name</th>
//                                 <th>Value</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map(item => (
//                                 <tr key={item.id}>
//                                     <td>{item.id}</td>
//                                     <td>{item.name}</td>
//                                     <td>{item.value}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div> */}
//             </div>
//         </div>
//     );
// }

// export default Results;



// Filepath: D:\OFFICE_PROJECT\work\src\components\Results.js
import React, { useEffect, useState } from 'react';
import './Results.css'; // Import CSS for styling

function Results() {
    const [data, setData] = useState([]); // State to hold the results data
    const [loading, setLoading] = useState(true); // State to manage loading status
    const [error, setError] = useState(null); // State to manage error status

    useEffect(() => {
        // Function to fetch the processed results from the server
        const fetchResultsData = async () => {
            try {
                const response = await fetch('http://localhost:5000/results'); // Update with your server endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const resultData = await response.json(); // Parse JSON data
                setData(resultData.results); // Assuming the response has a 'results' field
            } catch (error) {
                setError(error.message); // Set error message if fetch fails
            } finally {
                setLoading(false); // Set loading to false after fetch completes
            }
        };

        fetchResultsData(); // Call the function to fetch data
    }, []); // Empty dependency array to run once on mount

    if (loading) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if fetch fails
    }

    return (
        <div className="results-container">
            <div className="results-header">
                <h2>Results</h2>
                <p>This section displays the results of your data processing.</p>
            </div>
            <div className='main-table-container'>
                <div className="results-table-container1">
                    <h2>Final Report</h2>
                    <table className="results-table1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Results;
