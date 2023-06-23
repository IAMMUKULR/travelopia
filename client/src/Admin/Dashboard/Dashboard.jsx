import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <>
          <Sidebar />
          <div className="dashboard_container">
            <div className="dashboard_div">
              <h1>Dashboard</h1>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
