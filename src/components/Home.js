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

//       // Show loader popup
//       setShowLoader(true);

//       // Simulate result generation time
//       setTimeout(() => {
//         setShowLoader(false); // Hide loader
//         navigate('/results'); // Redirect to results page
//       }, 2000); // Adjust the delay as needed

//       // Clear the file inputs
//       setFiles(Array(6).fill(null));

//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };

//   const closePopup = () => {
//     setShowPopup(false); // Close the popup
//   };

//   return (
//     <div className="home-container">
//       <div className='top-container'>
//         <div className='content-container'>
//           <h1>About the SOD TOOL</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque dicta asperiores explicabo, possimus obcaecati quibusdam sit adipisci recusandae deserunt quis! Iusto praesentium accusamus quaerat perspiciatis offic </p>
//         </div>
//         <div className='image-container'>
//           <img src={image1} alt="description" />
//         </div>
//       </div>
//       <div className='bottom-container'>
//         <div className='bottom-container-heading'><h2>Upload Excel Sheets</h2></div>
//         <div className="file-inputs-container">
//           {files.map((file, index) => (
//             <div key={index} className="file-input">
//               <input
//                 type="file"
//                 accept=".xlsx, .xls"
//                 onChange={(event) => handleFileChange(index, event)}
//               />
//               {/* Uncomment if you want to show the remove button */}
//               {/* {file && (
//                 <span className="close-icon" onClick={() => removeFile(index)}>
//                   &times; 
//                 </span>
//               )} */}
//             </div>
//           ))}
//         </div>

//         <button onClick={handleUpload}>Upload</button>

//         {/* Popup for successful upload */}
//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <span className="close" onClick={closePopup}>&times;</span>
//               <h3>Files Uploaded Successfully!</h3>
//               <p>Your files have been uploaded.</p>
//             </div>
//           </div>
//         )}

//         {/* Loader Popup */}
//         {showLoader && (
//           <div className="loader-popup">
//             <div className="loader-popup-content">
//               <h3>Generating Results...</h3>
//               <p>Please wait.</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;




// Filepath: D:\OFFICE_PROJECT\work\src\components\Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css';
import image1 from '../Images/image1.jpg';

function Home() {
  const [files, setFiles] = useState(Array(6).fill(null)); // State to hold file inputs
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [showLoader, setShowLoader] = useState(false); // State to control loader visibility
  const [uploadedFiles, setUploadedFiles] = useState([]); // State to hold uploaded files
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0]; // Store the selected file
    setFiles(newFiles);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles[index] = null; // Deselect the file
    setFiles(newFiles);

    // Clear the input field (if applicable)
    const inputField = document.querySelector(`input[type="file"]:nth-of-type(${index + 1})`);
    if (inputField) {
      inputField.value = ''; // Clear the input field
    }
  };

  const handleUpload = async () => {
    // Check if all file inputs are filled
    if (files.some(file => file === null)) {
      alert('Please upload all files before proceeding.'); // Alert the user
      return; // Stop the upload process
    }

    const formData = new FormData();
    files.forEach((file) => {
      if (file) {
        formData.append('files', file); // Append each file to FormData with the field name 'files'
      }
    });

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      // Check if the response is OK
      if (!response.ok) {
        const errorText = await response.text(); // Get the error response text
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log(result); // Handle the response from the backend
      setUploadedFiles(result.files); // Assuming the response contains the uploaded files
      setShowPopup(true); // Show the popup on successful upload

      // Show loader popup after a short delay
      setTimeout(() => {
        setShowPopup(false); // Hide success popup
        setShowLoader(true); // Show loader popup
      }, 1000); // Adjust the delay as needed

      // Simulate result generation time
      setTimeout(() => {
        setShowLoader(false); // Hide loader
        navigate('/results'); // Redirect to results page
      }, 6000); // Adjust the delay as needed

      // Clear the file inputs
      setFiles(Array(6).fill(null));

    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };


  return (
    <div className="home-container">
      <div className='top-container'>
        <div className='content-container'>
          <h1>About the SOD TOOL</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque dicta asperiores explicabo, possimus obcaecati quibusdam sit adipisci recusandae deserunt quis! Iusto praesentium accusamus quaerat perspiciatis offic </p>
        </div>
        <div className='image-container'>
          <img src={image1} alt="description" />
        </div>
      </div>
      <div className='bottom-container'>
        <div className='bottom-container-heading'><h2>Upload Excel Sheets</h2></div>
        <div className="file-inputs-container">
          {files.map((file, index) => (
            <div key={index} className="file-input">
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={(event) => handleFileChange(index, event)}
              />
            </div>
          ))}
        </div>

        <button onClick={handleUpload}>Upload</button>

        {/* Popup for successful upload */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>Files Uploaded Successfully!</h3>
              <i className="fas fa-check-circle" style={{ color: 'green', marginRight: '10px', height:'20px',fontSize: '40px' }}></i>
            </div>
          </div>
          )} 

        {/* Loader Popup */}
        {showLoader && (
          <div className="loader-popup">
            <div className="loader-popup-content">
              <h3>Generating Results...</h3>
              <p>Please wait.</p>
              <div className="loader"></div> {/* Add a loader animation here */}
            </div>
          </div>
         )}  
      </div>
    </div>
  );
}

export default Home;

