import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import CreateGlobalStyle from "./globalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateGlobalStyle />
    <App />
  </React.StrictMode>,
);
