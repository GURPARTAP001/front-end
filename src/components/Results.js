// Filepath: D:\OFFICE_PROJECT\work\src\components\Results.js
import React from 'react';
import './Results.css'; // Import CSS for styling
import { useLocation } from 'react-router-dom'; // Import useLocation for accessing state


function Results() {

   

    // Sample data for the table
    const data = [
        { id: 1, name: 'Item 1', value: 'Value 1' },
        { id: 2, name: 'Item 2', value: 'Value 2' },
        { id: 3, name: 'Item 3', value: 'Value 3' },
        { id: 4, name: 'Item 4', value: 'Value 4' },
        { id: 5, name: 'Item 5', value: 'Value 5' },
        { id: 6, name: 'Item 6', value: 'Value 6' },
        { id: 7, name: 'Item 7', value: 'Value 7' },
        { id: 8, name: 'Item 8', value: 'Value 8' },
        { id: 9, name: 'Item 9', value: 'Value 9' },
        { id: 10, name: 'Item 10', value: 'Value 10' },
        { id: 11, name: 'Item 11', value: 'Value 11' },
        { id: 12, name: 'Item 12', value: 'Value 12' },
        { id: 13, name: 'Item 13', value: 'Value 13' },
        { id: 14, name: 'Item 14', value: 'Value 14' },
        { id: 15, name: 'Item 15', value: 'Value 15' },
        { id: 16, name: 'Item 16', value: 'Value 16' },
        { id: 17, name: 'Item 17', value: 'Value 17' },
        { id: 18, name: 'Item 18', value: 'Value 18' },
        { id: 19, name: 'Item 19', value: 'Value 19' },
        { id: 20, name: 'Item 20', value: 'Value 20' },
        { id: 21, name: 'Item 21', value: 'Value 21' },
        { id: 22, name: 'Item 22', value: 'Value 22' },
        { id: 23, name: 'Item 23', value: 'Value 23' },
        { id: 24, name: 'Item 24', value: 'Value 24' },
        { id: 25, name: 'Item 25', value: 'Value 25' },
        { id: 26, name: 'Item 26', value: 'Value 26' },
        { id: 27, name: 'Item 27', value: 'Value 27' },
        { id: 28, name: 'Item 28', value: 'Value 28' },
        { id: 29, name: 'Item 29', value: 'Value 29' },
        { id: 30, name: 'Item 30', value: 'Value 30' },
        { id: 31, name: 'Item 31', value: 'Value 31' },
        { id: 32, name: 'Item 32', value: 'Value 32' },
        { id: 33, name: 'Item 33', value: 'Value 33' },
        { id: 34, name: 'Item 34', value: 'Value 34' },
        { id: 35, name: 'Item 35', value: 'Value 35' },
        { id: 36, name: 'Item 36', value: 'Value 36' },
        { id: 37, name: 'Item 37', value: 'Value 37' },
        { id: 38, name: 'Item 38', value: 'Value 38' },
        { id: 39, name: 'Item 39', value: 'Value 39' },
        { id: 40, name: 'Item 40', value: 'Value 40' },
        { id: 41, name: 'Item 41', value: 'Value 41' },
        { id: 42, name: 'Item 42', value: 'Value 42' },
        { id: 43, name: 'Item 43', value: 'Value 43' },
        { id: 44, name: 'Item 44', value: 'Value 44' },
        { id: 45, name: 'Item 45', value: 'Value 45' },
        { id: 46, name: 'Item 46', value: 'Value 46' },
        { id: 47, name: 'Item 47', value: 'Value 47' },
        { id: 48, name: 'Item 48', value: 'Value 48' },
        { id: 49, name: 'Item 49', value: 'Value 49' },
        { id: 50, name: 'Item 50', value: 'Value 50' },
        { id: 51, name: 'Item 51', value: 'Value 51' },
        { id: 52, name: 'Item 52', value: 'Value 52' },
        { id: 53, name: 'Item 53', value: 'Value 53' },
        { id: 54, name: 'Item 54', value: 'Value 54' },
        { id: 55, name: 'Item 55', value: 'Value 55' },
        { id: 56, name: 'Item 56', value: 'Value 56' },
        { id: 57, name: 'Item 57', value: 'Value 57' },
        { id: 58, name: 'Item 58', value: 'Value 58' },
        { id: 59, name: 'Item 59', value: 'Value 59' },
        { id: 60, name: 'Item 60', value: 'Value 60' },
        { id: 61, name: 'Item 61', value: 'Value 61' },
        { id: 62, name: 'Item 62', value: 'Value 62' },
        { id: 63, name: 'Item 63', value: 'Value 63' },
        { id: 64, name: 'Item 64', value: 'Value 64' },
        { id: 65, name: 'Item 65', value: 'Value 65' },
        { id: 66, name: 'Item 66', value: 'Value 66' },
        { id: 67, name: 'Item 67', value: 'Value 67' },
        { id: 68, name: 'Item 68', value: 'Value 68' },
        { id: 69, name: 'Item 69', value: 'Value 69' },
        { id: 70, name: 'Item 70', value: 'Value 70' },
        { id: 71, name: 'Item 71', value: 'Value 71' },
        { id: 72, name: 'Item 72', value: 'Value 72' },
        { id: 73, name: 'Item 73', value: 'Value 73' },
        { id: 74, name: 'Item 74', value: 'Value 74' },
        { id: 75, name: 'Item 75', value: 'Value 75' },
        { id: 76, name: 'Item 76', value: 'Value 76' },
        { id: 77, name: 'Item 77', value: 'Value 77' },
        { id: 78, name: 'Item 78', value: 'Value 78' },
        { id: 79, name: 'Item 79', value: 'Value 79' },
        { id: 80, name: 'Item 80', value: 'Value 80' },
        { id: 81, name: 'Item 81', value: 'Value 81' },
        { id: 82, name: 'Item 82', value: 'Value 82' },
        { id: 83, name: 'Item 83', value: 'Value 83' },
        { id: 84, name: 'Item 84', value: 'Value 84' },
        { id: 85, name: 'Item 85', value: 'Value 85' },
        { id: 86, name: 'Item 86', value: 'Value 86' },
        { id: 87, name: 'Item 87', value: 'Value 87' },
        { id: 88, name: 'Item 88', value: 'Value 88' },
        { id: 89, name: 'Item 89', value: 'Value 89' },
        { id: 90, name: 'Item 90', value: 'Value 90' },
        { id: 91, name: 'Item 91', value: 'Value 91' },
        { id: 92, name: 'Item 92', value: 'Value 92' },
        { id: 93, name: 'Item 93', value: 'Value 93' },
        { id: 94, name: 'Item 94', value: 'Value 94' },
        { id: 95, name: 'Item 95', value: 'Value 95' },
        { id: 96, name: 'Item 96', value: 'Value 96' },
        { id: 97, name: 'Item 97', value: 'Value 97' },
        { id: 98, name: 'Item 98', value: 'Value 98' },
        { id: 99, name: 'Item 99', value: 'Value 99' },
        { id: 100, name: 'Item 100', value: 'Value 100' },
        { id: 101, name: 'Item 101', value: 'Value 101' },
        { id: 102, name: 'Item 102', value: 'Value 102' },
        { id: 103, name: 'Item 103', value: 'Value 103' },
        { id: 104, name: 'Item 104', value: 'Value 104' },
        { id: 105, name: 'Item 105', value: 'Value 105' },
        { id: 106, name: 'Item 106', value: 'Value 106' },
        { id: 107, name: 'Item 107', value: 'Value 107' },
        { id: 108, name: 'Item 108', value: 'Value 108' },
        { id: 109, name: 'Item 109', value: 'Value 109' },
        { id: 110, name: 'Item 110', value: 'Value 110' },
        { id: 111, name: 'Item 111', value: 'Value 111' },
        { id: 112, name: 'Item 112', value: 'Value 112' },
        { id: 113, name: 'Item 113', value: 'Value 113' },
        { id: 114, name: 'Item 114', value: 'Value 114' },
        { id: 115, name: 'Item 115', value: 'Value 115' },
        { id: 116, name: 'Item 116', value: 'Value 116' },
        { id: 117, name: 'Item 117', value: 'Value 117' },
        { id: 118, name: 'Item 118', value: 'Value 118' },
        { id: 119, name: 'Item 119', value: 'Value 119' },
        { id: 120, name: 'Item 120', value: 'Value 120' },
        { id: 121, name: 'Item 121', value: 'Value 121' },
        { id: 122, name: 'Item 122', value: 'Value 122' },
        { id: 123, name: 'Item 123', value: 'Value 123' },
        { id: 124, name: 'Item 124', value: 'Value 124' },
        { id: 125, name: 'Item 125', value: 'Value 125' },
        { id: 126, name: 'Item 126', value: 'Value 126' },
        { id: 127, name: 'Item 127', value: 'Value 127' },
        { id: 128, name: 'Item 128', value: 'Value 128' },
        { id: 129, name: 'Item 129', value: 'Value 129' },
        { id: 130, name: 'Item 130', value: 'Value 130' },
        { id: 131, name: 'Item 131', value: 'Value 131' },
        { id: 132, name: 'Item 132', value: 'Value 132' },
        { id: 133, name: 'Item 133', value: 'Value 133' },
        { id: 134, name: 'Item 134', value: 'Value 134' },
        { id: 135, name: 'Item 135', value: 'Value 135' },
        { id: 136, name: 'Item 136', value: 'Value 136' },
        { id: 137, name: 'Item 137', value: 'Value 137' },
        { id: 138, name: 'Item 138', value: 'Value 138' },
        { id: 139, name: 'Item 139', value: 'Value 139' },
        { id: 140, name: 'Item 140', value: 'Value 140' },
        { id: 141, name: 'Item 141', value: 'Value 141' },
        { id: 142, name: 'Item 142', value: 'Value 142' },
        { id: 143, name: 'Item 143', value: 'Value 143' },
        { id: 144, name: 'Item 144', value: 'Value 144' },
        { id: 145, name: 'Item 145', value: 'Value 145' },
        { id: 146, name: 'Item 146', value: 'Value 146' },
        { id: 147, name: 'Item 147', value: 'Value 147' },
        { id: 148, name: 'Item 148', value: 'Value 148' },
        { id: 149, name: 'Item 149', value: 'Value 149' },
        { id: 150, name: 'Item 150', value: 'Value 150' },
        { id: 151, name: 'Item 151', value: 'Value 151' },
        { id: 152, name: 'Item 152', value: 'Value 152' },
        { id: 153, name: 'Item 153', value: 'Value 153' },
        { id: 154, name: 'Item 154', value: 'Value 154' },
        { id: 155, name: 'Item 155', value: 'Value 155' },
        { id: 156, name: 'Item 156', value: 'Value 156' },
        { id: 157, name: 'Item 157', value: 'Value 157' },
        { id: 158, name: 'Item 158', value: 'Value 158' },
    ];

    return (
        <div className="results-container">
            <div className="results-header">
                <h2>Results</h2>

            </div>
            <div className='main-table-container'>
                <div className="results-table-container1">
                    <div className='results-table-container1-heading' >
                        <div className='results-table-container1-heading-main'>
                            <h2>Risk Report</h2>
                            <button className="download-btn">
                                <i className="fas fa-download"></i> {/* Font Awesome download icon */}
                                Download
                            </button>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus distinctio, maxime laudantium temporibus molestiae qui vitae assumenda facere ducimus at, dolores consequuntur libero, beatae voluptatem commodi quas velit porro a.</p>
                    </div>
                    <div className='results-table-container1-heading-table'>
                        <table className="results-table1">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => (
                                    <tr key={item.id}>
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
        </div>
    );
}

export default Results;



// // Filepath: D:\OFFICE_PROJECT\work\src\components\Results.js
// import React, { useEffect, useState } from 'react';
// import './Results.css'; // Import CSS for styling

// function Results() {
//     const [data, setData] = useState([]); // State to hold the results data
//     const [loading, setLoading] = useState(true); // State to manage loading status
//     const [error, setError] = useState(null); // State to manage error status

//     useEffect(() => {
//         // Function to fetch the processed results from the server
//         const fetchResultsData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/results'); // Update with your server endpoint
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const resultData = await response.json(); // Parse JSON data
//                 setData(resultData.results); // Assuming the response has a 'results' field
//             } catch (error) {
//                 setError(error.message); // Set error message if fetch fails
//             } finally {
//                 setLoading(false); // Set loading to false after fetch completes
//             }
//         };

//         fetchResultsData(); // Call the function to fetch data
//     }, []); // Empty dependency array to run once on mount

//     if (loading) {
//         return <div>Loading...</div>; // Show loading message while fetching data
//     }

//     if (error) {
//         return <div>Error: {error}</div>; // Show error message if fetch fails
//     }

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
//                             {data.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>{item.id}</td>
//                                     <td>{item.name}</td>
//                                     <td>{item.value}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Results;
