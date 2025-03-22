import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column vh-100" style={{ background: "linear-gradient(to right, #E0BBE4, #FFDFD3, #FFD3B6)" }}>
      {/* Top Navigation */}
      <div className="d-flex justify-content-between align-items-center p-3">
        <div className="fw-bold display-5 text-dark ms-4">
          <p>Wednesday,</p>
          <p>June 20th</p>
        </div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="d-flex flex-grow-1 align-items-center justify-content-between p-4">
        {/* Function Buttons */}
        <div className="d-flex flex-column gap-3">
          <button onClick={() => navigate("/workout-plan")} className="btn btn-light shadow-sm px-4 py-2 rounded-pill fs-5 border border-secondary">
            Workout plan today
          </button>
          <button onClick={() => navigate("/calendar")} className="btn btn-light shadow-sm px-4 py-2 rounded-pill fs-5 border border-secondary">
            Calendar
          </button>
        </div>

        {/* Welcome Message */}
        <div className="text-end text-dark me-4">
          <h1 className="display-3 fw-bold">FitSync</h1>
          <h2 className="display-5 fw-bold mt-2">Welcome <span className="fst-italic">name</span>,</h2>
          <p className="mt-2 h5">You're near the end of your luteal phase</p>
          <p className="mt-1 h6">You may be feeling irritated, take things slow today and focus on low intensity exercises.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
