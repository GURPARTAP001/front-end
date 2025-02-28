// Filepath: D:\OFFICE_PROJECT\work\src\components\ToggleSwitch.js
import React from 'react';
import './ToggleSwitch.css'; // Create a CSS file for styling

const ToggleSwitch = ({ isOn, handleToggle }) => {
    return (
        <div className="toggle-switch" onClick={handleToggle}>
            <input type="checkbox" checked={isOn} readOnly />
            <span className="slider"></span>
        </div>
    );
};

export default ToggleSwitch;
