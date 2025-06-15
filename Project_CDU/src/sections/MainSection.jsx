// #region фото
    import img1 from "../assets/Images/main_section/main_section_1.jpg";
    import img2 from "../assets/Images/main_section/main_section_2.jpg";
// #endregion фото


// #region компоненты
    // компонент для текстовой информации
    import ContainerTextInfo from "../components/ContainerTextInfo";
    // компонент для списков
    import ContainerListInfo from "../components/ContainerListInfo"; 
    // секция кружков
    import MugsSection from "./MugsSection"
    // для анимации (блоки появляются, когда они в поле зрения)
    import FadeInOnScroll from "../components/forAnimation/FadeInOnScroll"; 
// #endregion компоненты


// #region разное
    // текст для блоков с информацией
    import {
        text_for_container_text_info,
        text_for_container_list_info
    } from "../data.js"; 
// #endregion разное


export default function MainSection() {
    const i = text_for_container_text_info; // текст для контейнера
    const j = text_for_container_list_info; // список для контейнера

    // переменные для задержок анимации
    const delay_1 = 0.1;
    const delay_2 = 0.2;

    return (
        // начало
        <section>
            {/* Блок Приветствие */}
            <FadeInOnScroll delay={delay_1}>
                <ContainerTextInfo
                    titleText={i[0].titleText}
                    colorfulText={i[0].colorfulText}
                    text={i[0].text}
                />
            </FadeInOnScroll>

            {/* блок с фото */}
            <FadeInOnScroll delay={delay_2}>
                <div className="container-2-imgs">
                    <div>
                        <img className="isimage" src={img1} alt="" />
                    </div>
                    <div>
                        <img className="isimage" src={img2} alt="" />
                    </div>
                </div>
            </FadeInOnScroll>

            {/* Блок Миссия */}
            <FadeInOnScroll delay={delay_1}>
                <ContainerTextInfo
                    titleText={i[1].titleText}
                    colorfulText={i[1].colorfulText}
                    text={i[1].text}
                />
            </FadeInOnScroll>

            {/* Блок список 1 цели */}
            <FadeInOnScroll delay={delay_1}>
                <ContainerListInfo
                    titleText={j[0].titleText}
                    list={j[0].list}
                />
            </FadeInOnScroll>

            {/* Блок список 2 задачи */}
            <FadeInOnScroll delay={delay_1}>
                <ContainerListInfo
                    titleText={j[1].titleText}
                    list={j[1].list}
                />
            </FadeInOnScroll>

            {/* секция кружков */}
            <MugsSection />
        </section>
        // конец
    );
}
