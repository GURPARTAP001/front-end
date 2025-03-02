// Filepath: D:\OFFICE_PROJECT\work\src\components\Navbar.js
import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation for tracking the current route
import './Dashboard.css';
import ToggleSwitch from './ToggleSwitch'; // Import the ToggleSwitch component
import Home from './Home'; // Import Home component
import Results from './Results'; // Import Results component
import Grapghs from './Grapghs';
import logo1 from '../Images/kpmg-logo-light.png'; // Light mode logo
import logo2 from '../Images/kpmg-logo-dark.png'; // Dark mode logo

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const location = useLocation(); // Get the current location

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <>
            <div className={`dashboard ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className="sidebar">
                    <img src={isDarkMode ? logo2 : logo1} alt="Logo" className="logo" /> {/* Conditional logo rendering */}
                    <ul className="menu">
                        <div className="top-menu">
                            <li className={location.pathname === '/' ? 'active' : ''}>
                                <Link to="/"><i className="fas fa-home"></i> Home</Link>
                            </li>
                            <li className={location.pathname === '/results' ? 'active' : ''}>
                                <Link to="/results"><i className="fa-solid fa-square-poll-horizontal"></i> Results</Link>
                            </li>
                            <li className={location.pathname === '/graphs' ? 'active' : ''}>
                                <Link to="/graphs"><i className="fas fa-chart-line"></i> Analytics</Link>
                            </li>
                        </div>
                        <div className="bottom-menu">
                            <li><i className="fas fa-cog"></i> Settings</li>
                            <li><i className="fas fa-sign-out-alt"></i> Logout</li>
                        </div>
                    </ul>
                </div>
                <div className="main-content">
                    <nav className="navbar">
                        <h1>KPMG Segregation of Duties Tool</h1>
                        <div className="navbar-items">
                            <div className="search-container">
                                <input type="text" placeholder="        Search..." className="search-bar" />
                                <i className="fas fa-search search-icon"></i>
                            </div>
                            <div className='toggle-btn'>
                                <span>Light</span>
                                <div><ToggleSwitch isOn={isDarkMode} handleToggle={toggleDarkMode} /></div>
                                <span>Dark</span>
                            </div>
                            <button className="profile-btn"><i className="fas fa-user"></i></button> {/* Profile Icon */}
                        </div>
                    </nav>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/results" element={<Results />} />
                            <Route path="/graphs" element={<Grapghs />} />
                        </Routes>
                        <div className='bottom-banner'>
                            <div style={{display:"flex"}}>
                            <img src={isDarkMode ? logo2 : logo1} alt="Company Logo" className="footer-logo" />
                            <div><p class="footer-text">© 2025 KPMG Assurance and Consulting Services LLP, an Indian Limited Liability Partnership and a member firm of the KPMG global organization of independent member firms affiliated with KPMG International Limited, a private English company limited by guarantee. All rights reserved.</p></div>
                            </div>
                            <div className="contact-details">
                                <p><strong>Contact Us</strong></p>
                                <p><i className="fas fa-envelope"></i> <strong>Email:info@company.com</strong> </p>
                                <p><i className="fas fa-phone"></i> <strong>Phone:(123) 456-7890</strong> </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
