import React from "react";
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar";

console.log("Sidebar:", Sidebar); // Should not be undefined or an object

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Sidebar />
      </header>
    </div>
  );
}

export default App;
