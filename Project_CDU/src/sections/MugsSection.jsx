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
    const ilr = text_for_container_mugs_teacher;

    return (
        <section className="container-info gap-20px p-lg">
            {/* заголовок */}
            <div className="container-title">
                <h3>Образовательные программы и преподаватели</h3>
            </div>

            {/* АВТОМАТИЗАЦИЯ картинки кружков и учителей и подписи к ним */}
            {ilr.map((i, index) => {
                return (
                    <ContainerMugsTeacher
                        key={index}
                        imgMugSrc={i.imgMugSrc}
                        imgTeacherSrc={i.imgTeacherSrc}
                        titleMug={i.titleMug}
                        titleTeacher={i.titleTeacher}
                        discMug={i.discMug}
                        discTeacher={i.discTeacher}
                    />
                );
            })}
        </section>
    );
}