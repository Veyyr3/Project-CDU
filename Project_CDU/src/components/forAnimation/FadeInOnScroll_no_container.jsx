// ЭТО КОМПОНЕНТ ДЛЯ АНИМАЦИИ, НО ОН НЕ ОБОРАЧИВАЕТ В DIV, А ДОБАВЛЯЕТ СТИЛИ АНИМАЦИИ
import React, { useRef, useEffect, useState } from "react";

const FadeInOnScroll_no_container = ({ children, delay = 0, once = true }) => {
    const domRef = useRef(); // Создаем ref для привязки к DOM-элементу

    const [isVisible, setIsVisible] = useState(false); // Состояние для отслеживания видимости

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);

                        if (once) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!once) {
                        setIsVisible(false);
                    }
                });
            },

            {
                threshold: 0.1, // 10% элемента должно быть в поле зрения

                rootMargin: "0px 0px -50px 0px", // Срабатывает чуть раньше
            }
        );

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, [once]); // Клонируем дочерний элемент и добавляем ему нужные пропсы // Важно: children должен быть ТОЛЬКО ОДИН элемент

    if (React.Children.count(children) !== 1) {
        console.error("FadeInOnScroll_no_container expects exactly one child element.");

        return children; // Возвращаем детей как есть или null, в зависимости от желаемого поведения
    }

    return React.cloneElement(children, {
        ref: domRef, // Передаем ref дочернему элементу

        className: `${children.props.className || ""} fade-in-section ${
            isVisible ? "is-visible" : ""
        }`.trim(), // Добавляем классы

        style: {
            ...(children.props.style || {}), // Сохраняем существующие стили

            transitionDelay: `${delay}s`, // Добавляем задержку
        },
    });
};

export default FadeInOnScroll_no_container;
