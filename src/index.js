import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import router from "./Routes/router";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <RouterProvider router={App} /> */}
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
