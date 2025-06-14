import { useState } from 'react';
import logo from '../assets/Images/Logo.png'
import night_theme_button from "../assets/Images/night_theme_icon.png";
import Button from './Button'

export default function Header ({setTargetPage}) {
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
            <div id="container-night-theme-toggle">
                <img
                    src={night_theme_button}
                    alt="Переключить тему"
                    title="Переключить тему"
                />
            </div>
        </header>
    );
}