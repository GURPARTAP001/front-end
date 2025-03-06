import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css'; // Import CSS for styling
import image1 from '../Images/image1.jpg'; // Import an image for display

function Home() {
  const [files, setFiles] = useState(Array(6).fill(null)); // State to hold uploaded files, initialized to null
  const [showPopup, setShowPopup] = useState(false); // State to control visibility of success popup
  const [showLoader, setShowLoader] = useState(false); // State to control visibility of loader
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Array of specific file names corresponding to the expected uploads
  const fileNames1 = [
    'SOD_Risk', 'Function Permission', 'AGR_TCODE', 'USR02', 'AGR_1251', 'AGR_USER'
  ];

  const fileNames = ['File', 'File', 'File', 'File', 'File', 'File']

  // Function to handle file selection
  const handleFileChange = (index, event) => {
    const newFiles = [...files]; // Create a copy of the current files array
    newFiles[index] = event.target.files[0]; // Update the specific index with the selected file
    setFiles(newFiles); // Update state with the new files array
    console.log(`File selected for index ${index}:`, event.target.files[0]); // Log the selected file
  };

  // Function to handle file upload
  const handleUpload = async () => {
    // Check if all files have been uploaded
    if (files.some(file => file === null)) {
      alert('Please upload all files before proceeding.'); // Alert if any file is missing
      return; // Exit the function
    }

    const formData = new FormData(); // Create a new FormData object to hold the files
    files.forEach((file, index) => {
      formData.append(fileNames[index], file); // Append each file to the FormData object
    });

    try {
      // Send a POST request to upload the files
      const response = await fetch('http://localhost:5000/process', {
        method: 'POST',
        body: formData, // Attach the FormData object
      });

      // Check if the response is not OK
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${await response.text()}`); // Throw an error with response details
      }

      const resultData = await response.json(); // Assuming the server returns a JSON response with the path
      localStorage.setItem('resultDataPath', resultData.Path); // Store the path in local storage

      setShowPopup(true); // Show success popup
      setTimeout(() => {
        setShowPopup(false); // Hide popup after 1 second
        setShowLoader(true); // Show loader after popup is hidden
      }, 1000);

      // Navigate to results page after 6 seconds
      setTimeout(() => {
        setShowLoader(false); // Hide loader
        navigate('/results'); // Navigate to the results page
      }, 6000);

      setFiles(Array(6).fill(null)); // Reset files state to null
    } catch (error) {
      console.error('Error uploading files:', error); // Log any errors during upload
    }
  };

  return (
    <div className="home-container"> {/* Main container for the Home component */}
      <div className='top-container'> {/* Top section containing information and image */}
        <div className='content-container'> {/* Container for text content */}
          <h1>About the SOD TOOL</h1> {/* Title */}
          <p>The SoD Risk Assessment Tool identifies and mitigates segregation of duties conflicts...</p> {/* Description */}
        </div>
        <div className='image-container'> {/* Container for the image */}
          <img src={image1} alt="description" /> {/* Display the imported image */}
        </div>
      </div>
      <div className='bottom-container'> {/* Bottom section for file uploads */}
        <h2>Upload Excel Sheets</h2> {/* Subtitle for upload section */}
        <div className="file-inputs-container"> {/* Container for file input fields */}
          {/* Left Inputs */}
          <div className="left-container"> {/* Left side for file inputs */}
            <h3>Baseline Files</h3> {/* Heading for left inputs */}
            {fileNames1.slice(0, 2).map((label, index) => ( // Map over the first two file names
              <div className="file-input" key={index}> {/* Container for each file input */}
                <label>{label}:</label> {/* Use specific name for the input */}
                <input
                  type="file" // File input type
                  accept=".xlsx, .xls" // Accept only Excel files
                  onChange={(event) => handleFileChange(index, event)} // Handle file change
                />
              </div>
            ))}
          </div>

          {/* Right Inputs */}
          <div className="right-container"> {/* Right side for file inputs */}
            <h3>Core Input Files</h3> {/* Heading for right inputs */}
            {[0, 1].map(rowIndex => ( // Map over two rows for file inputs
              <div className="file-input-row" key={rowIndex}> {/* Container for each row of inputs */}
                {fileNames1.slice(2 + rowIndex * 2, 4 + rowIndex * 2).map((label, fileIndex) => { // Map over the next four file names
                  const actualIndex = 2 + rowIndex * 2 + fileIndex; // Calculate the actual index
                  return (
                    <div className="file-input" key={actualIndex}> {/* Container for each file input */}
                      <label>{label}:</label> {/* Use specific name for the input */}
                      <input
                        type="file" // File input type
                        accept=".xlsx, .xls" // Accept only Excel files
                        onChange={(event) => handleFileChange(actualIndex, event)} // Handle file change
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleUpload} className='upload'>Generate Output</button> {/* Button to trigger file upload */}

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>Files Uploaded Successfully!</h3>
              <i className="fas fa-check-circle" style={{ color: 'green', marginRight: '10px', height: '20px', fontSize: '40px' }}></i>
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

export default Home; // Export the Home component




