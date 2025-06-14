// #region компоненты
    import ProjectItem from "../components/ProjectItem";
// #endregion компоненты

// #region разное
    // текст для проектов
    import { text_for_project_item } from "../data.js";
// #endregion разное

export default function ProjectSection() {
    return (
        <section className="container-info container-title">
            <h2>Страница "Проекты и конкурсы"</h2>
            {/* описание страницы */}
            <div className="div-text-info">
                <h4>
                    <strong>Цель этой страницы: </strong>
                </h4>
                <p>
                    Познакомить вас с нашими текущими и предстоящими проектами и
                    конкурсами, дать возможность присоединиться к ним и проявить
                    свои таланты. Мы верим, что участие в проектах развивает
                    важные навыки, такие как командная работа, критическое
                    мышление и креативность.
                </p>
            </div>

            {/* секция с проектами */}
            <section>
                {/* Заголовок */}
                <div className="div-text-info" style={{ textAlign: "center" }}>
                    <h2>
                        <strong>Список проектов: </strong>
                    </h2>
                </div>

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
            </section>
            {/* КОНЕЦ секция с проектами */}
        </section>
    );
}
