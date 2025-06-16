import { useEffect, useState } from "react";

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

export default function Header({ setTargetPage }) {
    // Состояние для отслеживания текущей темы
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark-theme";
    });

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
            {/* логотип */}
            <FadeInOnScroll delay={0.1}>
                <div id="container-main-logo">
                    <img className="isimage" src={logo} alt="Логотип ЦДЮ" />
                </div>
            </FadeInOnScroll>

            {/* навигация */}
            <nav>
                <ul>
                    <li>
                        <FadeInOnScroll delay={0.3}>
                            <Button
                                className="nav_button"
                                onClick={() => setTargetPage("main")}
                            >
                                Главная
                            </Button>
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll delay={0.4}>
                            <Button
                                className="nav_button"
                                onClick={() => setTargetPage("mugs")}
                            >
                                Кружки
                            </Button>
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll delay={0.5}>
                            <Button
                                className="nav_button"
                                onClick={() => setTargetPage("projects")}
                            >
                                Проекты и конкурсы
                            </Button>
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll delay={0.5}>
                            <Button
                                className="nav_button"
                                onClick={() => setTargetPage("gallery")}
                            >
                                Галерея
                            </Button>
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll delay={0.6}>
                            <Button
                                className="nav_button"
                                onClick={scrollToFooter}
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
                    onClick={toggleTheme} // Вызываем toggleTheme без анонимной функции
                    style={{ borderWidth: "0px" }}
                >
                    <img
                        src={night_theme_button}
                        alt="Переключить тему"
                        title="Переключить тему"
                        // Динамически добавляем класс для поворота
                        className={isDarkTheme ? "rotate-dark" : "rotate-light"}
                    />
                </Button>
            </FadeInOnScroll>
        </header>
    );
}
