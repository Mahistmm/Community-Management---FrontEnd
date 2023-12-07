import React from "react";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User/User";
import CreateUser from "./pages/createUser/CreateUser";
import ViewUser from "./pages/viewUser/ViewUser";
import Analytics from "./pages/Analytics/Analytics";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/view/:userId" element={<ViewUser />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
