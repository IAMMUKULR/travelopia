import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  function logout(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/admin/login");
  }

  return (
    <>
      <nav class="main-menu">
        <ul>
          <li>
            <Link to="/admin/dashboard">
              <i class="fa fa-home fa-2x"></i>
              <span class="nav-text">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/wanderlusters">
              <i class="fa fa-book fa-2x"></i>
              <span class="nav-text">wanderluster</span>
            </Link>
          </li>
        </ul>

        <ul class="logout">
          <li>
            <a id="logout" href="/admin/login">
              <i class="fa fa-power-off fa-2x"></i>
              <span onClick={(e) => logout(e)} class="nav-text">
                Logout
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
