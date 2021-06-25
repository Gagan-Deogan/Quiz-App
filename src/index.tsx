import React from "react";
import ReactDOM from "react-dom";
import "./assests/css/index.css";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from "./context/QuizProvider";
import { QuizzezProvider } from "./context/QuizziesProvider";
import { AuthProvider } from "context/AuthProvider";
import { SnakbarProvider } from "context/SnakbarProvider";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SnakbarProvider>
        <AuthProvider>
          <QuizzezProvider>
            <QuizProvider>
              <App />
            </QuizProvider>
          </QuizzezProvider>
        </AuthProvider>
      </SnakbarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
