
// Filepath: D:\OFFICE_PROJECT\work\src\components\Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css';

function Home() {
  const [files, setFiles] = useState(Array(5).fill(null)); // State to hold file inputs
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
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

      // Clear the file inputs
      setFiles(Array(5).fill(null));

      // Navigate to the /results page after a short delay
      setTimeout(() => {
        navigate('/results');
      }, 2000); // Adjust the delay as needed

    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const checkFileExistence = async (fileName) => {
    try {
      const response = await fetch(`http://localhost:5000/uploads/${fileName}`);
      if (!response.ok) {
        throw new Error(`File ${fileName} does not exist.`);
      }
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="home-container">
      <div className='top-container'>
        <div className='content-container'>
          <h1>Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque dicta asperiores explicabo, possimus obcaecati quibusdam sit adipisci recusandae deserunt quis! Iusto praesentium accusamus quaerat perspiciatis officia reiciendis. Doloremque, laudantium?</p>
        </div>
        <div className='image-container'>
          <img src="https://th.bing.com/th/id/OIP.oDmQn8ncWbN8DJifU9YbrQHaEM?w=288&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="description" />
        </div>
      </div>
      <div className='bottom-container'>
        <h2>Upload Excel Sheets</h2>
        <div className="file-inputs-container">
        {files.map((file, index) => (
          <div key={index} className="file-input">
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={(event) => handleFileChange(index, event)}
            />
            {file && (
              <span className="close-icon" onClick={() => removeFile(index)}>
                &times; {/* Close icon for deselecting the file */}
              </span>
            )}
          </div>
        ))}
      </div>
        <button onClick={handleUpload}>Upload</button>

        {/* Popup for successful upload */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>&times;</span>
              <h3>Files Uploaded Successfully!</h3>
              <p>Your files have been uploaded.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
