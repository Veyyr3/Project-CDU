import logo from '../assets/Images/Logo.png'

export default function Header () {

    return (
        <header>
            {/* логотип */}
            <div><img src={logo} alt="Логотип ЦДЮ" /></div>
        </header>
    )
}