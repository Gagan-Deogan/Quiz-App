import React from "react";
import ReactDOM from "react-dom";
import "./assests/css/index.css";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from "./Context/QuizContext";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <App />
      </QuizProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
