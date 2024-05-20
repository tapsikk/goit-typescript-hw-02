import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as 
HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
