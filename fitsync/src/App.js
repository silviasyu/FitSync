import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing Router, Route, and Switch
import './App.css';
import Sidebar from "./components/Sidebar";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Calendar from "./screens/Calendar";
import MonthlyReport from "./screens/MonthlyReport";


function App() {
    return (
      <Router> {/* Wrap everything inside Router */}
        <div className="App">
          <header className="App-header">
          </header>
  
          <div className="main-content">
            <Routes> {/* Use Routes instead of Switch in React Router v6 */}
              <Route path="/" element={<Home />} /> {/* Home Route */}
              <Route path="/settings" element={<Settings />} /> {/* Settings Route */}
              <Route path="/calendar" element={<Calendar />} /> {/* Calendar Route */}
              <Route path="/monthly-report" element={<MonthlyReport />} /> {/* Monthly Report Route */}
            </Routes>
          </div>
        </div>
      </Router>
    );
}

export default App;
