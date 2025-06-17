import { useState } from "react"; // useState больше не нужен для переключения страниц
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
    // const [targetPage, setTargetPage] = useState("main"); // Эту строку теперь можно удалить, так как навигацию будет контролировать React Router

    return (
        <>
            {/* Header больше не принимает prop setTargetPage, так как он использует Link из React Router */}
            <Header />

            <main>
                {/* Здесь мы используем компоненты Routes и Route для определения маршрутов */}
                <Routes>
                    {/* Route для главной страницы. path="/" соответствует корневому URL */}
                    <Route path="/" element={<MainSection />} />

                    {/* Route для страницы "Кружки". path="/mugs" */}
                    <Route path="/mugs" element={<MugsSection />} />

                    {/* Route для страницы "Проекты и конкурсы". path="/projects" */}
                    <Route path="/projects" element={<ProjectSection />} />

                    {/* Route для страницы "Галерея". path="/gallery" */}
                    <Route path="/gallery" element={<GallerySection />} />

                    {/*
                        Дополнительно: Вы можете добавить Route для 404 страницы,
                        если ни один из путей не совпадает.
                        <Route path="*" element={<NotFoundPage />} />
                    */}
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;