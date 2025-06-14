// #region компоненты
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"; // яндекс карты
// #endregion компоненты

export default function Footer() {
    // Координаты для Улица Сарбагышева, 156, Токмок
    const tokmokCoordinates = [42.847269, 75.299479];
    const mapZoom = 15; // Можно увеличить масштаб для более детального вида

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
                {/* Добавляем modules в YMaps */}
                <YMaps modules={["geocode", "geoObjects"]}>
                    {" "}
                    {/* 'geocode' полезен, 'geoObjects' нужен для Placemark */}
                    <div>
                        {/* Убедитесь, что у контейнера карты есть заданная высота */}
                        <Map
                            defaultState={{
                                center: tokmokCoordinates,
                                zoom: mapZoom,
                            }}
                            style={{ width: "100%", height: "400px" }} // Обязательно задайте высоту
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
