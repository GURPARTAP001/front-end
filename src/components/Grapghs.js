// Filepath: D:\OFFICE_PROJECT\work\src\components\Grapghs.js
import React from 'react';
import './Grapghs.css'; // Import the CSS file for styling

function Grapghs() {
  return (
    <div className="graphs-container">
      <div className="cards">
        <div className="card">
          <h3>Analytics 1</h3>
          <p>Value: 120</p>
        </div>
        <div className="card">
          <h3>Analytics 2</h3>
          <p>Value: 80</p>
        </div>
        <div className="card">
          <h3>Analytics 3</h3>
          <p>Value: 200</p>
        </div>
        <div className="card">
          <h3>Analytics 4</h3>
          <p>Value: 150</p>
        </div>
      </div>

      <div className='graph-box-main'>
        <div className='graph-box-left'>
          <div className="graph-box1 box">
            {/* Placeholder for graphs */}
            <h2>Graphs Section</h2>
            <p>Various graphs will be displayed here.</p>
          </div>
          <div className='graph-box-left-inner'>
            <div className="graph-box2 box">
              {/* Placeholder for graphs */}
              <h2>Graphs Section</h2>
              <p>Various graphs will be displayed here.</p>
            </div>
            <div className="graph-box3 box">
              {/* Placeholder for graphs */}
              <h2>Graphs Section</h2>
              <p>Various graphs will be displayed here.</p>
            </div>
          </div>

        </div>

        <div className='graph-box-right'>
          <div className="graph-box4 box">
            {/* Placeholder for graphs */}
            <h2>Graphs Section</h2>
            <p>Various graphs will be displayed here.</p>
          </div>
          <div className="graph-box5 box">
            {/* Placeholder for graphs */}
            <h2>Graphs Section</h2>
            <p>Various graphs will be displayed here.</p>
          </div>

        </div>
      </div>

      

    </div>
  );
}

export default Grapghs;




