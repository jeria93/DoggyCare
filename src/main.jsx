import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
  { path: "/", element: <Welcome /> },
  { path: "/dogs", element: <Dogs /> },
  { path: "/dogs/:id", element: <DogDetail /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
