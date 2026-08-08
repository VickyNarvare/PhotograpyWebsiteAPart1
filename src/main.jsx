import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GalleryProvider } from "./context/GalleryContext";
import { BookingProvider } from "./context/BookingContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </GalleryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
