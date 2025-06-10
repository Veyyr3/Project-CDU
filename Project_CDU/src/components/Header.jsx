import logo from '../assets/Images/Logo.png'
import night_theme_button from "../assets/Images/night_theme_icon.png";
import Button from './Button'

export default function Header () {

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
                        <Button className="nav_button">Главная</Button>
                    </li>
                    <li>
                        <Button className="nav_button">Кружки</Button>
                    </li>
                </ul>
            </nav>

            {/* переключить тему */}
            <div id="container-night-theme-toggle">
                <img src={night_theme_button} alt="Переключить тему" />
            </div>
        </header>
    );
}