// // Filepath: D:\OFFICE_PROJECT\work\src\components\Home.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import './Home.css';
// import image1 from '../Images/image1.jpg';

// function Home() {
//   const [files, setFiles] = useState(Array(6).fill(null)); // State to hold file inputs
//   const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
//   const [showLoader, setShowLoader] = useState(false); // State to control loader visibility
//   const [uploadedFiles, setUploadedFiles] = useState([]); // State to hold uploaded files
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleFileChange = (index, event) => {
//     const newFiles = [...files];
//     newFiles[index] = event.target.files[0]; // Store the selected file
//     setFiles(newFiles);
//   };

//   const removeFile = (index) => {
//     const newFiles = [...files];
//     newFiles[index] = null; // Deselect the file
//     setFiles(newFiles);

//     // Clear the input field (if applicable)
//     const inputField = document.querySelector(`input[type="file"]:nth-of-type(${index + 1})`);
//     if (inputField) {
//       inputField.value = ''; // Clear the input field
//     }
//   };

//   const handleUpload = async () => {
//     // Check if all file inputs are filled
//     if (files.some(file => file === null)) {
//       alert('Please upload all files before proceeding.'); // Alert the user
//       return; // Stop the upload process
//     }

//     const formData = new FormData();
//     files.forEach((file) => {
//       if (file) {
//         formData.append('files', file); // Append each file to FormData with the field name 'files'
//       }
//     });

//     try {
//       const response = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       // Check if the response is OK
//       if (!response.ok) {
//         const errorText = await response.text(); // Get the error response text
//         throw new Error(`Error: ${response.status} - ${errorText}`);
//       }

//       const result = await response.json();
//       console.log(result); // Handle the response from the backend
//       setUploadedFiles(result.files); // Assuming the response contains the uploaded files
//       setShowPopup(true); // Show the popup on successful upload

//       // Show loader popup after a short delay
//       setTimeout(() => {
//         setShowPopup(false); // Hide success popup
//         setShowLoader(true); // Show loader popup
//       }, 1000); // Adjust the delay as needed

//       // Simulate result generation time
//       setTimeout(() => {
//         setShowLoader(false); // Hide loader
//         navigate('/results'); // Redirect to results page
//       }, 6000); // Adjust the delay as needed

//       // Clear the file inputs
//       setFiles(Array(6).fill(null));

//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };

//   return (
//     <div className="home-container">
//       <div className='top-container'>
//         <div className='content-container'>
//           <h1>About the SOD TOOL</h1>
//           <p>The SoD Risk Assessment Tool identifies and mitigates segregation of duties conflicts, ensuring compliance and robust security. With automated risk analysis and detailed reporting, it enhances fraud prevention and operational integrity. Engineered for precision and efficiency, it strengthens internal controls and governance frameworks</p>
//         </div>
//         <div className='image-container'>
//           <img src={image1} alt="description" />
//         </div>
//       </div>
//       <div className='bottom-container'>
//         <div className='bottom-container-heading'><h2>Upload Excel Sheets</h2></div>
//         <div className="file-inputs-container">
//           <div className="file-input-container left-container">
//             <h3>Baseline Files</h3>
//             <div className="file-input">
//               <label>SOD Risk:-</label>
//               <input
//                 type="file"
//                 accept=".xlsx, .xls"
//                 onChange={(event) => handleFileChange(0, event)}
//               />
//             </div>
//             <div className="file-input">
//               <label>Function Permission:-</label>
//               <input
//                 type="file"
//                 accept=".xlsx, .xls"
//                 onChange={(event) => handleFileChange(1, event)}
//               />
//             </div>
//           </div>
//           <div className="file-input-container right-container">
//             <h3>Core Input Files</h3>
//             <div className="file-input-row">
//               <div className="file-input">
//                 <label>AGR_TCODES:-</label>
//                 <input
//                   type="file"
//                   accept=".xlsx, .xls"
//                   onChange={(event) => handleFileChange(2, event)}
//                 />
//               </div>
//               <div className="file-input">
//                 <label>USR02:-</label>
//                 <input
//                   type="file"
//                   accept=".xlsx, .xls"
//                   onChange={(event) => handleFileChange(3, event)}
//                 />
//               </div>
//             </div>
//             <div className="file-input-row">
//               <div className="file-input">
//                 <label>AGR_1251:-</label>
//                 <input
//                   type="file"
//                   accept=".xlsx, .xls"
//                   onChange={(event) => handleFileChange(4, event)}
//                 />
//               </div>
//               <div className="file-input">
//                 <label>AGR_USER:-</label>
//                 <input
//                   type="file"
//                   accept=".xlsx, .xls"
//                   onChange={(event) => handleFileChange(5, event)}
//                 />
//               </div>
//             </div>
//           </div>

//         </div>

//         <button onClick={handleUpload} className='upload'>Generate Output</button>

//         {/* Popup for successful upload */}
//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <h3>Files Uploaded Successfully!</h3>
//               <i className="fas fa-check-circle" style={{ color: 'green', marginRight: '10px', height: '20px', fontSize: '40px' }}></i>
//             </div>
//           </div>
//         )}

//         {/* Loader Popup */}
//         {showLoader && (
//           <div className="loader-popup">
//             <div className="loader-popup-content">
//               <h3>Generating Results...</h3>
//               <p>Please wait.</p>
//               <div className="loader"></div> {/* Add a loader animation here */}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import image1 from '../Images/image1.jpg';

function Home() {
  const [files, setFiles] = useState(Array(6).fill(null));
  const [showPopup, setShowPopup] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const fileNames = ['sod_risk', 'function_permission', 'agr_tcodes', 'usr02', 'agr_1251', 'agr_user'];

  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0];
    setFiles(newFiles); // Ensures state updates correctly
    console.log(`File selected for ${fileNames[index]}:`, event.target.files[0]);
  };

  const handleUpload = async () => {
    if (files.some(file => file === null)) {
      alert('Please upload all files before proceeding.');
      return;
    }

    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(fileNames[index], file);
    });

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${await response.text()}`);
      }

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setShowLoader(true);
      }, 1000);

      setTimeout(() => {
        setShowLoader(false);
        navigate('/results');
      }, 6000);

      setFiles(Array(6).fill(null)); // Reset state
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className="home-container">
      <div className='top-container'>
        <div className='content-container'>
          <h1>About the SOD TOOL</h1>
          <p>The SoD Risk Assessment Tool identifies and mitigates segregation of duties conflicts...</p>
        </div>
        <div className='image-container'>
          <img src={image1} alt="description" />
        </div>
      </div>
      <div className='bottom-container'>
        <h2>Upload Excel Sheets</h2>
        <div className="file-inputs-container">
          {/* Left Inputs */}
          <div className="left-container">
            <h3>Left Inputs</h3>
            {fileNames.slice(0, 2).map((label, index) => (
              <div className="file-input" key={index}>
                <label>{label.replace('_', ' ').toUpperCase()}:</label>
                <input 
                  type="file" 
                  accept=".xlsx, .xls" 
                  onChange={(event) => handleFileChange(index, event)}
                />
              </div>
            ))}
          </div>

          {/* Right Inputs */}
          <div className="right-container">
            <h3>Right Inputs</h3>
            {[0, 1].map(rowIndex => (
              <div className="file-input-row" key={rowIndex}>
                {fileNames.slice(2 + rowIndex * 2, 4 + rowIndex * 2).map((label, fileIndex) => {
                  const actualIndex = 2 + rowIndex * 2 + fileIndex;
                  return (
                    <div className="file-input" key={actualIndex}>
                      <label>{label.replace('_', ' ').toUpperCase()}:</label>
                      <input 
                        type="file" 
                        accept=".xlsx, .xls" 
                        onChange={(event) => handleFileChange(actualIndex, event)}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleUpload} className='upload'>Generate Output</button>

        {showPopup && <div className="popup"><h3>Files Uploaded Successfully!</h3></div>}
        {showLoader && <div className="loader-popup"><h3>Generating Results...</h3><div className="loader"></div></div>}
      </div>
    </div>
  );
}

export default Home;
