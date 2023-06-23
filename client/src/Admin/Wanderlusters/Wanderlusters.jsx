import React, { useState, useEffect } from "react";
import "./Wanderlusters.css";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import Login from "../Login/Login";
import DataTable from "react-data-table-component";
const columns = [
  {
    name: "S.NO",
    selector: (row) => row._id,
  },
  {
    name: "Name",
    selector: (row) => row.fullName,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Phone",
    selector: (row) => row.phoneNumber,
  },
  {
    name: "Area",
    selector: (row) => row.no_of_travelers,
  },
  {
    name: "Budget",
    selector: (row) => row.budget_per_person,
  },
  {
    name: "Interests",
    selector: (row) => row.no_of_travelers,
  },
  {
    name: "Travelers",
    selector: (row) => row.no_of_travelers,
  },
  {
    name: "Duration",
    selector: (row) => row.tripDuration,
  },
  {
    name: "When",
    selector: (row) => row.tripDuration,
  },
  {
    name: "Planning Stage",
    selector: (row) => row.planningStage,
  },
];

export default function EnrolledStudents() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://travelopia-zz3k.onrender.com/api/wanderlusters", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        setData(response.data.wanderlusters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  return (
    <>
      {token ? (
        <>
          <Sidebar />
          <div className="enrolled_container">
            <h1>Wanderlusters List</h1>
            <div style={{ margin: "100px" }}>
              <DataTable className="font-bold" columns={columns} data={data} />
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
