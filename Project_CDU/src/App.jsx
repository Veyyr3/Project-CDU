import { useState } from "react";
import "./App.scss";

// #region компоненты
import Header from "./components/Header";
import Footer from "./components/Footer";
// #endregion компоненты

// #region секции
import MainSection from "./sections/MainSection";
import MugsSection from "./sections/MugsSection";
import ProjectSection from "./sections/ProjectSection";
import GallerySection from "./sections/GallerySection";
// #endregion секции

function App() {
    return (
        <>
            <Header/>
            <p>hi!</p>
            <Footer/>
        </>
    )
}

export default App;