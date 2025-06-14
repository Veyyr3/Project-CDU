import { useEffect } from 'react';
import logo from '../assets/Images/Logo.png'
import night_theme_button from "../assets/Images/night_theme_icon.png";
import Button from './Button'

export default function Header ({setTargetPage}) {
    // сменить тему
    function toggleTheme() {
        const body = document.body;
        // Всегда переключаем класс 'dark-theme'
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark-theme");
        } else {
            localStorage.setItem("theme", ""); // Сохраняем пустую строку для светлой темы
        }
    }

    // useEffect для инициализации темы при первой загрузке компонента
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark-theme") {
            // Проверяем, что сохранена именно темная тема
            document.body.classList.add("dark-theme");
        } else {
            // Если сохранена пустая строка или нет ничего, убеждаемся, что dark-theme удалена
            document.body.classList.remove("dark-theme");
        }
    }, []); // Пустой массив зависимостей означает, что этот эффект запускается только один раз при монтировании компонента

    // сделать скроллинг с контактов на футер
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
                        <Button // Используем компонент Button здесь
                            className="nav_button"
                            onClick={scrollToFooter} // Вызываем функцию прокрутки
                        >
                            Контакты
                        </Button>
                    </li>
                </ul>
            </nav>
            {/* переключить тему */}

            <Button
                id="container-night-theme-toggle"
                onClick={() => toggleTheme()}
                style={{ borderWidth: "0px" }}
            >
                <img
                    src={night_theme_button}
                    alt="Переключить тему"
                    title="Переключить тему"
                />
            </Button>
        </header>
    );
}