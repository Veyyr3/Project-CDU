import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"; // яндекс карты

// для анимации (плавное появление когда в поле зрения) но не оборачивать в div
import FadeInOnScroll_no_container from "../components/forAnimation/FadeInOnScroll_no_container";

export default function Footer() {
    // Координаты для Улица Сарбагышева, 156, Токмок
    const tokmokCoordinates = [42.847269, 75.299479];
    const mapZoom = 15; // Можно увеличить масштаб для более детального вида

    // переменные для задержок анимации
    const delay_1 = 0.1;
    const delay_2 = 0.2;

    return (
        // Корневой тег
        <footer id="contacts-footer">
            {/* левая часть */}
            <FadeInOnScroll_no_container delay={delay_1}>
                <address className="footer-left">
                    <h4>Контактная информация:</h4>
                    <br />
                    <div>
                        <p>
                            <strong>Адрес:</strong> Улица Сарбагышева, 156
                            ​Токмок, Чуйский район, Чуйская область
                        </p>
                        <p>
                            <strong>Телефон:</strong> +7 (123) 456-78-90
                        </p>
                        <p>
                            <strong>Email:</strong> info@youthcenter.ru
                        </p>
                    </div>
                </address>
            </FadeInOnScroll_no_container>

            {/* разделительная линия */}
            <FadeInOnScroll_no_container delay={delay_2}>
                <div className="footer-line-between"></div>
            </FadeInOnScroll_no_container>

            {/* правая часть */}
            <FadeInOnScroll_no_container delay={0.3}>
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
                                className="Ymap"
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
            </FadeInOnScroll_no_container>
        </footer>
        // КОНЕЦ Корневой тег
    );
}
