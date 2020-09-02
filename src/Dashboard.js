import React from "react";
import "./Dashboard.css";

function Dashboard(props) {
  return (
    <div className="dashboard__container">
      <div className="dashboard">hey</div>
      <button onClick={props.getWeatherData}></button>
    </div>
  );
}

export default Dashboard;
