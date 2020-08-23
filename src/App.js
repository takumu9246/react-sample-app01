import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import Router from "./routes/router";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sidebar">
          <div className="App-header">
            <img src={logo} className="App-logo Icon" alt="logo" />
            <p className="Icon">CSV Practice</p>
          </div>
          <div className="menubar">
            <SideBar />
          </div>
        </div>
        <div className="mainview">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
