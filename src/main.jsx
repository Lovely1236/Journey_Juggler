import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ItinerarieForm from "./pages/ItinerarieForm.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { VITE_GOOGLE_AUTHENTICATION_CLIENT_ID } from "./utils/constent.js";
import Trip from "./pages/Trip.jsx";
import MyTrips from "./pages/MyTrips.jsx";
import Error from "./pages/Error.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-itineraries",
        element: <ItinerarieForm />,
      },
      {
        path: "/trip/:tripId",
        element: <Trip />,
      },
      {
        path: "/my-trips",
        element: <MyTrips />,
      },
    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={VITE_GOOGLE_AUTHENTICATION_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
