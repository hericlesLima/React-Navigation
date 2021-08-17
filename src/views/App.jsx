import React from "react";
import Content from "../components/Content";
import Menu from "../components/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const App = (props) => (
  <div className="App">
    <Router>
      <Menu />
      <Content />
    </Router>
  </div>
);

export default App;
