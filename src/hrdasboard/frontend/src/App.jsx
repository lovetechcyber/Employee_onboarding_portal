import { useState } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Team from "./Pages/MyTeam";
import Documents from "./Pages/Documents";
import Announcements from "./Pages/Announcements";
import Reports from "./Pages/Reports";
import Timekeeping from "./Pages/Timekeeping";
import ChatIcon from "./Pages/Dashboard/ChatIcon";
import Timecard from "./Pages/Timecard";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Signout from "./Pages/Signout";
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
          {/* <Route exact path="/hr" element={<LoginPage />} /> */}
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
