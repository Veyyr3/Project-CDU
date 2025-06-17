import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Для http маршрутов

// #region фото
    // Главный логотип сайта
    import logo from "../assets/Images/CDU_LOGO.jpg";
    // для кнопки темной темы
    import night_theme_button from "../assets/Images/night_theme_icon.png";
// #endregion фото

// #region компоненты
    // кастомная кнопка
    import Button from "./Button";
    // для анимации (плавное появление когда в поле зрения) но не оборачивать в div
    import FadeInOnScroll from "../components/forAnimation/FadeInOnScroll";
// #endregion компоненты

export default function Header() {
    const navigate = useNavigate(); // Инициализируем useNavigate

    // #region useState
        // Состояние для отслеживания текущей темы
        const [isDarkTheme, setIsDarkTheme] = useState(() => {
            const savedTheme = localStorage.getItem("theme");
            return savedTheme === "dark-theme";
        });

        // для показа или скрытия меню для телефонов
        const [showContainer, setShowContainer] = useState(false);
    // #endregion useState

    // useEffect для инициализации темы при первой загрузке компонента
    useEffect(() => {
        // Применяем класс к body на основе начального состояния isDarkTheme
        if (isDarkTheme) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [isDarkTheme]); // Зависимость от isDarkTheme, чтобы обновлять body при смене темы

    // Сменить тему
    function toggleTheme() {
        // Обновляем состояние isDarkTheme
        setIsDarkTheme((prevTheme) => {
            const newTheme = !prevTheme;
            if (newTheme) {
                localStorage.setItem("theme", "dark-theme");
            } else {
                localStorage.setItem("theme", "");
            }
            return newTheme;
        });
    }

    // Сделать скроллинг с контактов на футер
    const scrollToFooter = () => {
        const footerElement = document.getElementById("contacts-footer");
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header>
            {/* верхний блок */}
            <div id="header-top">
                {/* логотип */}
                <FadeInOnScroll delay={0.1}>
                    <div id="container-main-logo">
                        <img className="isimage" src={logo} alt="Логотип ЦДЮ" />
                    </div>
                </FadeInOnScroll>

                {/* кнопка для бургер меню (Для телефонов) */}
                <Button
                    onClick={
                        showContainer
                            ? () => setShowContainer(false) // если нажали второй раз
                            : () => setShowContainer(true) // если нажали один раз
                    }
                    className="nav_button but-open-menu-MP"
                >
                    ☰
                </Button>

                {/* блок с НАВИГАЦИЕЙ и ПЕРЕКЛЮЧЕНИЕМ ТЕМЫ для ПК */}
                <div className="container-nav-theme-toggle-PC">
                    {/* навигация */}
                    <nav>
                        <ul>
                            <li>
                                <FadeInOnScroll delay={0.3}>
                                    <Link to="/" className="nav_button">
                                        Главная
                                    </Link>
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll delay={0.4}>
                                    <Link to="/mugs" className="nav_button">
                                        Кружки
                                    </Link>
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll delay={0.5}>
                                    <Link to="/projects" className="nav_button">
                                        Проекты и конкурсы
                                    </Link>
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll delay={0.5}>
                                    <Link to="/gallery" className="nav_button">
                                        Галерея
                                    </Link>
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll delay={0.6}>
                                    <Button
                                        className="nav_button"
                                        onClick={scrollToFooter} // Пока используем Button для прокрутки
                                    >
                                        Контакты
                                    </Button>
                                </FadeInOnScroll>
                            </li>
                        </ul>
                    </nav>

                    {/* переключить тему */}
                    <FadeInOnScroll delay={0.7}>
                        <Button
                            id="container-night-theme-toggle"
                            onClick={toggleTheme}
                            style={{ borderWidth: "0px" }}
                        >
                            <img
                                src={night_theme_button}
                                alt="Переключить тему"
                                title="Переключить тему"
                                className={
                                    isDarkTheme ? "rotate-dark" : "rotate-light"
                                }
                            />
                        </Button>
                    </FadeInOnScroll>
                </div>
                {/* КОНЕЦ блок с НАВИГАЦИЕЙ и ПЕРЕКЛЮЧЕНИЕМ ТЕМЫ для ПК */}
            </div>
            {/* КОНЕЦ верхний блок */}

            {/* нижний блок (для телефонов) */}
            <div id="header-bottom">
                {/* блок с НАВИГАЦИЕЙ и ПЕРЕКЛЮЧЕНИЕМ ТЕМЫ для МТ */}
                <div
                    className={
                        showContainer
                            ? "container-nav-theme-toggle-MP"
                            : "container-nav-theme-toggle-OPEN-MP"
                    }
                >
                    {/* навигация */}
                    <nav>
                        <ul>
                            <li>
                                <FadeInOnScroll delay={0.3}>
                                    <Link
                                        to="/"
                                        className="nav_button"
                                        onClick={() => setShowContainer(false)}
                                    >
                                        Главная
                                    </Link>
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll delay={0.4}>
                                    <Link
                                        to="/mugs"
                                        className="nav_button"
                                        onClick={() => setShowContainer(false)}
                                    >
                                        Кружки
                                    </Link>
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll delay={0.5}>
                                    <Link
                                        to="/projects"
                                        className="nav_button"
                                        onClick={() => setShowContainer(false)}
                                    >
                                        Проекты и конкурсы
                                    </Link>
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll delay={0.5}>
                                    <Link
                                        to="/gallery"
                                        className="nav_button"
                                        onClick={() => setShowContainer(false)}
                                    >
                                        Галерея
                                    </Link>
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll delay={0.6}>
                                    <Button
                                        className="nav_button"
                                        onClick={() => {
                                            scrollToFooter();
                                            setShowContainer(false); // Закрываем мобильное меню после прокрутки
                                        }}
                                    >
                                        Контакты
                                    </Button>
                                </FadeInOnScroll>
                            </li>
                        </ul>
                    </nav>

                    {/* переключить тему */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginTop: "10px",
                        }}
                    >
                        {/* кнопка переключения темы */}
                        <FadeInOnScroll delay={0.7}>
                            <Button
                                id="container-night-theme-toggle"
                                onClick={toggleTheme}
                                style={{ borderWidth: "0px" }}
                            >
                                <img
                                    src={night_theme_button}
                                    alt="Переключить тему"
                                    title="Переключить тему"
                                    className={
                                        isDarkTheme
                                            ? "rotate-dark"
                                            : "rotate-light"
                                    }
                                />
                            </Button>
                        </FadeInOnScroll>
                        {/* подпись переключения темы для телефонов */}
                        <div className="container-title-night-theme-MP">
                            <p>⬅ Переключить тему</p>
                        </div>
                    </div>
                </div>
                {/* КОНЕЦ блок с НАВИГАЦИЕЙ и ПЕРЕКЛЮЧЕНИЕМ ТЕМЫ для МТ */}
            </div>
            {/* КОНЕЦ нижний блок (для телефонов) */}
        </header>
    );
}
