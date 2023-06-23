import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [adminlogindata, setAdminLoginData] = useState({
    userName: "",
    password: "",
  });

  function adminloginhandle(e) {
    const newData = { ...adminlogindata };
    newData[e.target.id] = e.target.value;
    setAdminLoginData(newData);
    // console.log(newData);
  }

  function adminloginSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/admin/login", adminlogindata, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          {/* <img src="/assets/iil-logo-transparent.png" alt="logo" /> */}

          <h1>Travelopia</h1>
        </div>
      </div>

      <div className="right">
        <form onSubmit={adminloginSubmit}>
          <h5>Login</h5>
          <div className="inputs">
            <input
              id="userName"
              name="userName"
              value={adminlogindata.email}
              onChange={(e) => adminloginhandle(e)}
              type="text"
              placeholder="User Name"
            />
            <br />
            <input
              id="password"
              name="password"
              value={adminlogindata.password}
              onChange={(e) => adminloginhandle(e)}
              type="password"
              placeholder="Password"
            />
          </div>

          <br />
          <br />

          <div className="remember-me--forget-password"></div>

          <br />
          <button id="login">Login</button>
        </form>
      </div>
    </div>
  );
}
