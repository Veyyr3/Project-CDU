
export default function ContainerMugsTeacher({imgMugSrc, imgTeacherSrc, titleMug, titleTeacher, discMug, discTeacher}) {
    
    return (
        // главный контейнер для фотографий и подписи к ним
        <div className="main-container-imgs-titles">
            {/* контейнер для фото кружка */}
            <div className="container-img-mug-teacher container-img--mug">
                <img src={imgMugSrc} alt="" />
                {/* контейнер для краткого описания фото (изначально он невидим) */}
                <div className="container-hiden-discription--mug">
                    <p>{discMug}</p>
                </div>
            </div>

            {/* контейнер для фото учителя */}
            <div className="container-img-mug-teacher container-img--teacher">
                <img src={imgTeacherSrc} alt="" />
                {/* контейнер для краткого описания фото (изначально он невидим) */}
                <div className="container-hiden-discription--teacher">
                    <p>{discTeacher}</p>
                </div>
            </div>

            {/* контейнер подписи кружков */}
            <div className="container-title-for-imgs-mug-teacher">
                <h2>{titleMug}</h2>
            </div>

            {/* контейнер подписи учителей */}
            <div className="container-title-for-imgs-mug-teacher" style={{margin: "0 10px"}}>
                <h2>{titleTeacher}</h2>
            </div>
        </div>
        // КОНЕЦ главный контейнер для фотографий и подписи к ним
    );
}