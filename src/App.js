import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Results from './components/Results'; // Import the Results component
import Grapghs from './components/Grapghs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} /> {/* Render Home when at the root path */}
            <Route path="results" element={<Results />} />
            <Route path="graphs" element={<Grapghs/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
