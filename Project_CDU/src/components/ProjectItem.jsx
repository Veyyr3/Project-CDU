
export default function ProjectItem({imgProjectSrc, dicsImg, title, age, term}) {

    return (
        // главный контейнер для предмета проекта
        <div className="main-container-project-item">
            {/* контейнер для фото и скрытого описания */}
            <div className="container-img-mug-teacher container-img--mug container-img-title-discription">
                <img className="isimage" src={imgProjectSrc} alt="" />
                {/* контейнер для краткого описания фото (изначально он невидим) */}
                <div className="container-hiden-discription--mug">
                    <p>{dicsImg}</p>
                </div>
            </div>

            {/* контейнер для краткой информации */}
            <div className="container-short-dicsription">
                <h3>{title}</h3>
                <p>
                    <strong>Возрастная группа:</strong>
                    {age}
                </p>
                <p>
                    <strong>Сроки реализации:</strong>
                    {term}
                </p>
            </div>
        </div>
        // КОНЕЦ главный контейнер для предмета проекта
    );
}