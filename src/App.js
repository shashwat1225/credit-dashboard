import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // <-- Import Routes
import Home from './Home';
import Credit from './Credit';
import Other from './Other';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/credit">Credit Dashboard</Link>
            </li>
            <li>
              <Link to="/other">Other Page</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>  {/* <-- Add this */}
          <Route path="/" element={<Home />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/other" element={<Other />} />
        </Routes> {/* <-- Close it here */}
      </div>
    </Router>
  );
}

export default App;
