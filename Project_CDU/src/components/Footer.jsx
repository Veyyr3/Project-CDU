import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"; // яндекс карты

export default function Footer() {
    // Координаты для Улица Сарбагышева, 156, Токмок
    const tokmokCoordinates = [42.847269, 75.299479];
    const mapZoom = 15; // Можно увеличить масштаб для более детального вида

    return (
        <footer id="contacts-footer">
            {/* левая часть */}
            <address className="footer-left">
                <h4>Контактная информация:</h4>
                <br />
                <div>
                    <p>
                        <strong>Адрес:</strong> Улица Сарбагышева, 156 ​Токмок,
                        Чуйский район, Чуйская область
                    </p>
                    <p>
                        <strong>Телефон:</strong> +7 (123) 456-78-90
                    </p>
                    <p>
                        <strong>Email:</strong> info@youthcenter.ru
                    </p>
                </div>
            </address>

            {/* разделительная линия */}
            <div className="footer-line-between"></div>

            {/* правая часть */}
            <div className="footer-right">
                <h4>Мы на карте:</h4>
                <br />
                {/* Карта */}
                <YMaps modules={["geocode", "geoObjects"]}>
                    <div id="container-yandex-map" className="isimage">
                        <Map
                            defaultState={{
                                center: tokmokCoordinates,
                                zoom: mapZoom,
                            }}
                            style={{ width: "600px", height: "200px" }}
                        >
                            <Placemark
                                geometry={tokmokCoordinates}
                                properties={{
                                    balloonContent:
                                        "<strong>Молодежный центр</strong><br/>Улица Сарбагышева, 156", // Текст, который появится при клике на метку
                                    hintContent: "Наш адрес в Токмоке", // Текст, который появится при наведении на метку
                                }}
                                options={{
                                    preset: "islands#blueDotIcon",
                                }}
                            />
                        </Map>
                    </div>
                </YMaps>
            </div>
        </footer>
    );
}
