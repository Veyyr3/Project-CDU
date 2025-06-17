import "./assets/scss/App.scss";
import "./assets/scss/ForMP.scss";
import { Routes, Route } from "react-router-dom"; // Импортируем Routes и Route

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
            <Header />

            <main>
                <Routes>
                    {/* Route для главной страницы. path="/" соответствует корневому URL */}
                    <Route path="/" element={<MainSection />} />

                    {/* Route для страницы "Кружки". path="/mugs" */}
                    <Route path="/mugs" element={<MugsSection />} />

                    {/* Route для страницы "Проекты и конкурсы". path="/projects" */}
                    <Route path="/projects" element={<ProjectSection />} />

                    {/* Route для страницы "Галерея". path="/gallery" */}
                    <Route path="/gallery" element={<GallerySection />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;