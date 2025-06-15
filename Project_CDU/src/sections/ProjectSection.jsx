// #region компоненты
    // компонент с информацией о проекте
    import ProjectItem from "../components/ProjectItem";
    // компонент блок с линией слева и текстом
    import ContainerLineAside from "../components/ContainerLineAside";
    // для анимации (блоки появляются, когда они в поле зрения)
    import FadeInOnScroll from "../components/forAnimation/FadeInOnScroll"; 
// #endregion компоненты

// #region разное
    // текст для проектов
    import { text_for_project_item } from "../data.js";
// #endregion разное

export default function ProjectSection() {
    // переменные для задержок анимации
    const delay_1 = 0.1;
    const delay_2 = 0.2;

    return (
        // корневой элемент
        <section
            className="container-info container-title"
            id="ProjectSection"
            style={{ padding: "1.75rem" }}
        >
            {/* Заголовок секции */}
            <FadeInOnScroll delay={delay_1}>
                <h2>Страница "Проекты и конкурсы"</h2>
            </FadeInOnScroll>

            {/* описание страницы */}
            <FadeInOnScroll delay={delay_1}>
                <ContainerLineAside>
                    <div className="div-text-info">
                        <h4>
                            <strong>Цель этой страницы: </strong>
                        </h4>
                        <p>
                            Познакомить вас с нашими текущими и предстоящими
                            проектами и конкурсами, дать возможность
                            присоединиться к ним и проявить свои таланты. Мы
                            верим, что участие в проектах развивает важные
                            навыки, такие как командная работа, критическое
                            мышление и креативность.
                        </p>
                    </div>
                </ContainerLineAside>
            </FadeInOnScroll>

            {/* секция с проектами */}
            <section>
                {/* Заголовок */}
                <FadeInOnScroll delay={delay_2}>
                    <div
                        className="div-text-info"
                        style={{ textAlign: "center" }}
                    >
                        <h2>
                            <strong>Список проектов:</strong>
                        </h2>
                    </div>
                </FadeInOnScroll>

                {/* контейнер для вывода проектов (Для этой же автоматизации) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        padding: "0 100px",
                    }}
                >
                    {/* автоматизация вывода проектов */}
                    {text_for_project_item.map((i, index) => {
                        return (
                            <FadeInOnScroll delay={delay_1}>
                                <ProjectItem
                                    key={index}
                                    imgProjectSrc={i.imgProjectSrc}
                                    dicsImg={i.dicsImg}
                                    title={i.title}
                                    age={i.age}
                                    term={i.term}
                                />
                            </FadeInOnScroll>
                        );
                    })}
                </div>
            </section>
            {/* КОНЕЦ секция с проектами */}
        </section>
        // КОНЕЦ корневой элемент
    );
}
