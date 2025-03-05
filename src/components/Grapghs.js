import React from 'react';
import './Grapghs.css'; // Import the CSS file for styling
import graph1 from '../Images/graph1.jpg'; // Import the image
import graph2 from '../Images/graph2.jpg'; // Import the image
import graph3 from '../Images/graph3.jpg'; // Import the image
import graph4 from '../Images/graph4.jpg'; // Import the image
import graph_top from '../Images/graph_top.jpg';

function Grapghs() {
  return (
    <div className="graphs-container">
      <div className='graph-box-top'>
        <h2>Main Graph Overview</h2>
        <div className='top-box'>
        <img src={graph_top} alt="Main Graph" className="main-graph-image" />
        </div>
       
      </div>
      <div className='graph-box-main'>
        <div className='graph-box-left'>
          <div className="graph-box1 box">
            <h2>Graphs Section 1</h2>
            <img src={graph1} alt="Graph 1" className="graph-image" />
          </div>
          <div className="graph-box1 box">
            <h2>Graphs Section 2</h2>
            <img src={graph2} alt="Graph 2" className="graph-image" />
          </div>
        </div>

        <div className='graph-box-right'>
          <div className="graph-box1 box">
            <h2>Graphs Section 3</h2>
            <img src={graph3} alt="Graph 3" className="graph-image" />
          </div>
          <div className="graph-box1 box">
            <h2>Graphs Section 4</h2>
            <img src={graph4} alt="Graph 4" className="graph-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grapghs;


