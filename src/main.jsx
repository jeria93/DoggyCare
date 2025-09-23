import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Welcome from "./pages/Welcome.jsx";
import Dogs from "./pages/Dogs";
import DogDetail from "./pages/DogDetail";

const router = createHashRouter([
  { path: "/", element: <Welcome /> },
  { path: "/dogs", element: <Dogs /> },
  { path: "/dogs/:id", element: <DogDetail /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);