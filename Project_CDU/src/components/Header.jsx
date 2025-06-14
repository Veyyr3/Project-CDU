import { useEffect, useState } from "react"; // Импортируем useState
import logo from "../assets/Images/Logo.png";
import night_theme_button from "../assets/Images/night_theme_icon.png";
import Button from "./Button";

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
            <div id="container-main-logo">
                <img src={logo} alt="Логотип ЦДЮ" />
            </div>
            {/* навигация */}
            <nav>
                <ul>
                    <li>
                        <Button
                            className="nav_button"
                            onClick={() => setTargetPage("main")}
                        >
                            Главная
                        </Button>
                    </li>
                    <li>
                        <Button
                            className="nav_button"
                            onClick={() => setTargetPage("mugs")}
                        >
                            Кружки
                        </Button>
                    </li>
                    <li>
                        <Button
                            className="nav_button"
                            onClick={() => setTargetPage("projects")}
                        >
                            Проекты и конкурсы
                        </Button>
                    </li>
                    <li>
                        <Button
                            className="nav_button"
                            onClick={() => setTargetPage("gallery")}
                        >
                            Галерея
                        </Button>
                    </li>
                    <li>
                        <Button className="nav_button" onClick={scrollToFooter}>
                            Контакты
                        </Button>
                    </li>
                </ul>
            </nav>
            {/* переключить тему */}
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
        </header>
    );
}
