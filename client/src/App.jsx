import HomePage from "./HomePage";
import LoginAdmin from "./Admin/Login/Login";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Wanderluters from "./Admin/Wanderlusters/Wanderlusters";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-[100%]  overflow-auto">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/admin/login" element={<LoginAdmin />} />
            <Route exact path="/admin/dashboard" element={<Dashboard />} />
            <Route
              exact
              path="/admin/wanderlusters"
              element={<Wanderluters />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
