import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Menu from "./components/Menu/Menu";
import BusinessPage from "./pages/BusinessPage/BusinessPage";

const App = () => (
  <MuiThemeProvider>
    <div>
      <Menu />
      <div
        style={{
          margin: "80px 0px"
        }}
      >
        <BusinessPage />
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
