import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // http пути
import "./assets/scss/index.scss"; // стили
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
