// для анимации (плавное появление когда в поле зрения) но не оборачивать в div
import FadeInOnScroll_no_container from "../components/forAnimation/FadeInOnScroll_no_container";

export default function ContainerMugsTeacher({imgMugSrc, imgTeacherSrc, titleMug, titleTeacher, discMug, discTeacher}) {
    // переменные для задержок анимации
    const delay_1 = 0.1;
    const delay_2 = 0.2;

    return (
        // главный контейнер для фотографий и подписи к ним
        <div className="main-container-imgs-titles">
            {/* контейнер для фото кружка */}
            <FadeInOnScroll_no_container delay={delay_1}>
                <div className="container-img-mug-teacher container-img--mug">
                    <img className="isimage" src={imgMugSrc} alt="" />
                    {/* контейнер для краткого описания фото (изначально он невидим) */}
                    <div className="container-hiden-discription--mug">
                        <p>{discMug}</p>
                    </div>
                </div>
            </FadeInOnScroll_no_container>

            {/* контейнер для фото учителя */}
            <FadeInOnScroll_no_container delay={delay_2}>
                <div className="container-img-mug-teacher container-img--teacher">
                    <img className="isimage" src={imgTeacherSrc} alt="" />
                    {/* контейнер для краткого описания фото (изначально он невидим) */}
                    <div className="container-hiden-discription--teacher">
                        <p>{discTeacher}</p>
                    </div>
                </div>
            </FadeInOnScroll_no_container>

            {/* контейнер подписи кружков */}
            <FadeInOnScroll_no_container delay={delay_1}>
                <div className="container-title-for-imgs-mug-teacher">
                    <h2>{titleMug}</h2>
                </div>
            </FadeInOnScroll_no_container>

            {/* контейнер подписи учителей */}
            <FadeInOnScroll_no_container delay={delay_2}>
                <div
                    className="container-title-for-imgs-mug-teacher title-teacher"
                >
                    <h2>{titleTeacher}</h2>
                </div>
            </FadeInOnScroll_no_container>
        </div>
        // КОНЕЦ главный контейнер для фотографий и подписи к ним
    );
}