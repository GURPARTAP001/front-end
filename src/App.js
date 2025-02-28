// // import './App.css';
// // import Dashboard from './components/Dashboard';
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Home from './components/Home';

// // function App() {
// //   return (
// //     <div className="App">
// //      <Dashboard/>
// //     </div>
// //   );
// // }

// // export default App;

// // Filepath: D:\OFFICE_PROJECT\work\src\App.js
// import './App.css';
// import Dashboard from './components/Dashboard';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
// import Results from './components/Results'; // Import the Results component

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Dashboard />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/results" element={<Results />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// Filepath: D:\OFFICE_PROJECT\work\src\App.js
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Results from './components/Results'; // Import the Results component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} /> {/* Render Home when at the root path */}
            <Route path="results" element={<Results />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
