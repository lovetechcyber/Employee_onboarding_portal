import { useState } from "react";
import Dashboard from "./frontend/src/Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./frontend/src/Components/Layout";
import Home from "./frontend/src/Pages/Home";
import Profile from "./frontend/src/Pages/Profile";
import Team from "./frontend/src/Pages/MyTeam";
import Documents from "./frontend/src/Pages/Documents";
import Announcements from "./frontend/src/Pages/Announcements";
import Reports from "./frontend/src/Pages/Reports";
import Timekeeping from "./frontend/src/Pages/Timekeeping";
import ChatIcon from "./frontend/src/Pages/Dashboard/ChatIcon";
import Timecard from "./frontend/src/Pages/Timecard";
import LoginPage from "./frontend/src/Pages/LoginPage";
import RegisterPage from "./frontend/src/Pages/RegisterPage";
import Signout from "./frontend/src/Pages/Signout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <>
      <Router>
        {/* <Layout> */}
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<RegisterPage />} />

          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />
          <Route
            path="/documents"
            element={
              <Layout>
                <Documents />
              </Layout>
            }
          />
          <Route
            path="/announcements"
            element={
              <Layout>
                <Announcements />
              </Layout>
            }
          />
          <Route
            path="/reports"
            element={
              <Layout>
                <Reports />
              </Layout>
            }
          />
          <Route
            path="/timekeeping"
            element={
              <Layout>
                <Timekeeping />
              </Layout>
            }
          />
          <Route
            path="/timecard"
            element={
              <Layout>
                <Timecard />
              </Layout>
            }
          />
          <Route
            path="/signout"
            element={
              <Layout>
                <Signout />
              </Layout>
            }
          />
        </Routes>
        <ChatIcon />
        {/* </Layout> */}
      </Router>
    </>
  );
}

export default App;
