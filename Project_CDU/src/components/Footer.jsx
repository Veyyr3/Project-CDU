// #region компоненты
    import TwoGisMapWidget from "./TwoGisMapWidget"; // карта для апишки
// #endregion компоненты

export default function Footer() {
    return (
        <footer>
            {/* левая часть */}
            <address>
                <h3>Контактная информация:</h3>
                <p>
                    <strong>Адрес:</strong>
                    Улица Сарбагышева, 156 ​Токмок, Чуйский район, Чуйская
                    область
                </p>
                <p>
                    <strong>Телефон:</strong>
                    +7 (123) 456-78-90
                </p>
                <p>
                    <strong>Email:</strong>
                    info@youthcenter.ru
                </p>
            </address>

            {/* правая часть */}
            <div>
                {/* <TwoGisMapWidget/> */}
            </div>
        </footer>
    );
}
