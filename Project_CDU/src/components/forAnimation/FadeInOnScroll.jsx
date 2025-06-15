// ЭТО КОМПОНЕНТ ДЛЯ АНИМАЦИИ, НО ОБОРАЧИВАЕТ В DIV
import React, { useRef, useEffect, useState } from "react";

const FadeInOnScroll = ({ children, delay = 0, once = true }) => {
    const domRef = useRef(); // Создаем ref для привязки к DOM-элементу
    const [isVisible, setIsVisible] = useState(false); // Состояние для отслеживания видимости

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Если элемент в поле зрения И (анимация должна сработать только один раз ИЛИ она не сработала еще)
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) {
                            // Если анимация должна сработать только один раз, прекращаем наблюдение
                            observer.unobserve(entry.target);
                        }
                    } else if (!once) {
                        // Если анимация должна повторяться, и элемент вышел из поля зрения
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0.1, // 10% элемента должно быть в поле зрения для срабатывания
                rootMargin: "0px 0px -50px 0px", // Небольшой отступ, чтобы срабатывало чуть раньше
            }
        );

        // Начинаем наблюдать за элементом
        if (domRef.current) {
            observer.observe(domRef.current);
        }

        // Очистка: отключаем observer при размонтировании компонента
        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, [once]); // Зависимость от 'once', если вы захотите ее менять динамически

    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
            style={{ transitionDelay: `${delay}s` }} // Применяем задержку
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;
