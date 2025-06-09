import logo from '../assets/Images/Logo.png'
import Button from './Button'

export default function Header () {

    return (
        <header>
            {/* логотип */}
            <div id='container-main-logo'>
                <img src={logo} alt="Логотип ЦДЮ" />
            </div>

            {/* навигация */}
            <nav>
                <ul>
                    <li>
                        <Button>Главная</Button>
                    </li>
                    <li>
                        <Button>Кружки</Button>
                    </li>
                </ul>
            </nav>

            {/* переключить тему */}
        </header>
    );
}