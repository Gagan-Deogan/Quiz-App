import React from "react";
import ReactDOM from "react-dom";
import "./assests/css/index.css";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from "./Context/QuizContext";
import { QuizzezProvider } from "./Context/QuizziesContext";
import { AuthProvider } from "Context/AuthProvider";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuizzezProvider>
          <QuizProvider>
            <App />
          </QuizProvider>
        </QuizzezProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
