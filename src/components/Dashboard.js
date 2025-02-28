
// import React, { useState } from 'react';
// import { Link, Routes, Route } from 'react-router-dom'; // Import Link and Routes for navigation
// import './Dashboard.css';
// import ToggleSwitch from './ToggleSwitch'; // Import the ToggleSwitch component
// import Home from './Home'; // Import Home component
// import Results from './Results'; // Import Results component

// function Navbar() {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const toggleDarkMode = () => {
//         setIsDarkMode(prevMode => !prevMode);
//     };

//     return (
//         <div className={`dashboard ${isDarkMode ? 'dark-mode' : ''}`}>
//             <div className="sidebar">
//                 <img src="/logo192.png" alt="Logo" className="logo" />
//                 <ul className="menu">
//                     <div className="top-menu">
//                         <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
//                         <li><Link to="/results"><i className="fas fa-chart-line"></i> Results</Link></li>
//                     </div>
//                     <div className="bottom-menu">
//                         <li><i className="fas fa-cog"></i> Settings</li>
//                         <li><i className="fas fa-sign-out-alt"></i> Logout</li>
//                     </div>
//                 </ul>
//             </div>
//             <div className="main-content">
//                 <nav className="navbar">
//                     <h1>Dashboard</h1>
//                     <div className="navbar-items">
//                         <div className="search-container">
//                             <input type="text" placeholder="Search..." className="search-bar" />
//                             <i className="fas fa-search search-icon"></i>
//                         </div>
//                         <ToggleSwitch isOn={isDarkMode} handleToggle={toggleDarkMode} />
//                         <button className="profile-btn"><i className="fas fa-user"></i></button> {/* Profile Icon */}
//                     </div>
//                 </nav>
//                 <div className="content">
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/results" element={<Results />} />
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;


// Filepath: D:\OFFICE_PROJECT\work\src\components\Navbar.js
import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // Import Link and Routes for navigation
import './Dashboard.css';
import ToggleSwitch from './ToggleSwitch'; // Import the ToggleSwitch component
import Home from './Home'; // Import Home component
import Results from './Results'; // Import Results component

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`dashboard ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="sidebar">
                <img src="/logo192.png" alt="Logo" className="logo" />
                <ul className="menu">
                    <div className="top-menu">
                        <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
                        <li><Link to="/results"><i className="fas fa-chart-line"></i> Results</Link></li>
                    </div>
                    <div className="bottom-menu">
                        <li><i className="fas fa-cog"></i> Settings</li>
                        <li><i className="fas fa-sign-out-alt"></i> Logout</li>
                    </div>
                </ul>
            </div>
            <div className="main-content">
                <nav className="navbar">
                    <h1>Dashboard</h1>
                    <div className="navbar-items">
                        <div className="search-container">
                            <input type="text" placeholder="Search..." className="search-bar" />
                            <i className="fas fa-search search-icon"></i>
                        </div>
                        <ToggleSwitch isOn={isDarkMode} handleToggle={toggleDarkMode} />
                        <button className="profile-btn"><i className="fas fa-user"></i></button> {/* Profile Icon */}
                    </div>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/results" element={<Results />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
