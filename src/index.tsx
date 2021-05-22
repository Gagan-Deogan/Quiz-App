import React from "react";
import ReactDOM from "react-dom";
import "./assests/css/index.css";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from "./Context/QuizContext";
import { QuizzezProvider } from "./Context/QuizziesContext";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuizzezProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </QuizzezProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
