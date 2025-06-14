// #region компоненты
    import ProjectItem from "../components/ProjectItem";
    import ContainerLineAside from "../components/ContainerLineAside";
// #endregion компоненты

// #region разное
    // текст для проектов
    import { text_for_project_item } from "../data.js";
// #endregion разное

export default function ProjectSection() {
    return (
        <section
            className="container-info container-title"
            id="ProjectSection"
            style={{ padding: "1.75rem" }}
        >
            <h2>Страница "Проекты и конкурсы"</h2>

            {/* описание страницы */}
            <ContainerLineAside>
                <div className="div-text-info">
                    <h4>
                        <strong>Цель этой страницы: </strong>
                    </h4>
                    <p>
                        Познакомить вас с нашими текущими и предстоящими
                        проектами и конкурсами, дать возможность присоединиться
                        к ним и проявить свои таланты. Мы верим, что участие в
                        проектах развивает важные навыки, такие как командная
                        работа, критическое мышление и креативность.
                    </p>
                </div>
            </ContainerLineAside>

            {/* секция с проектами */}
            <section>
                {/* Заголовок */}
                <div className="div-text-info" style={{ textAlign: "center" }}>
                    <h2>
                        <strong>Список проектов:</strong>
                    </h2>
                </div>

                {/* контейнер для вывода проектов */}
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
                            <ProjectItem
                                key={index}
                                imgProjectSrc={i.imgProjectSrc}
                                dicsImg={i.dicsImg}
                                title={i.title}
                                age={i.age}
                                term={i.term}
                            />
                        );
                    })}
                </div>
            </section>
            {/* КОНЕЦ секция с проектами */}
        </section>
    );
}
