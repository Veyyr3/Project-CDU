// #region фото
    import img1 from "../assets/Images/main_section/main_section_1.jpg";
    import img2 from "../assets/Images/main_section/main_section_2.jpg";
// #endregion фото


// #region компоненты
    // компонент для текстовой информации
    import ContainerTextInfo from "../components/ContainerTextInfo";
    // компонент для списков
    import ContainerListInfo from "../components/ContainerListInfo"; 
// #endregion компоненты


// #region разное
    // текст для блоков с информацией
    import {
        text_for_container_text_info,
        text_for_container_list_info
    } from "../data.js"; 
// #endregion


export default function MainSection() {
    const i = text_for_container_text_info; // текст для контейнера
    const j = text_for_container_list_info; // список для контейнера

    return (
        // начало
        <section>
            {/* Блок Приветствие */}
            <ContainerTextInfo
                titleText={i[0].titleText}
                colorfulText={i[0].colorfulText}
                text={i[0].text}
            />

            {/* блок с фото */}
            <div className="container-2-imgs">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
            </div>

            {/* Блок список 1 */}
            <ContainerListInfo titleText={j[0].titleText} list={j[0].list}/>
        </section>
        // конец
    );
}
