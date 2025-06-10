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
    const [targetPage, setTargetPage] = useState("main"); // изменять целевую страницу

    return (
        <>
            <Header setTargetPage={setTargetPage}/>

            <main>
                {targetPage === "main" && <MainSection />}
                {targetPage === "mugs" && <MugsSection />}
                {targetPage === "projects" && <ProjectSection />}
                {targetPage === "gallery" && <GallerySection />}
            </main>

            <Footer/>
        </>
    )
}

export default App;