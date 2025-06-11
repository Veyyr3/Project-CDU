// #region фото
    // кружки
    import imgDraw from "../assets/Images/mugs_section/mugs_section_draw.jpg";
    
    // учителя
    import imgDrawTeacher from "../assets/Images/mugs_section/teachers/draw-teacher.jpg";
// #endregion фото

// #region компоненты
    import ContainerMugsTeacher from "../components/ContainerMugsTeacher"; // блок с фото занятия и учителем
// #endregion компоненты

// #region разное
    import { text_for_container_mugs_teacher } from "../data.js"; // текст для контенеров с фото кружков и учителями
// #endregion разное

export default function MugsSection() {
    // упрощение
    const i = text_for_container_mugs_teacher;

    return (
        <section>
            {/* заголовок */}
            <div className="container-title">
                <h3>Образовательные программы и преподаватели</h3>
            </div>

            {/* РИСОВАНИЕ */}
            <ContainerMugsTeacher
                imgMugSrc={i[0].imgMugSrc}
                imgTeacherSrc={i[0].imgTeacherSrc}
                titleMug={i[0].titleMug}
                titleTeacher={i[0].titleTeacher}
                discMug={i[0].discMug}
                discTeacher={i[0].discTeacher}
            />
        </section>
    );
}