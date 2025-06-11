
export default function ContainerMugsTeacher({imgMugSrc, imgTeacherSrc, titleMug, titleTeacher, discMug, discTeacher}) {
    
    return (
        // главный контейнер для фотографий и подписи к ним
        <div className="main-container-imgs-titles">
            {/* контейнер для кружка и подписи к нему */}
            <div className="container-imgs-titles">
                {/* контейнер для фото кружка */}
                <div className="container-img">
                    <img src={imgMugSrc} alt="" />
                    {/* контейнер для краткого описания фото (изначально он невидим) */}
                    <div>
                        <p>{discMug}</p>
                    </div>
                </div>
                {/* контейнер подписи */}
                <div className="container-title-imgs">
                    <h1>{titleMug}</h1>
                </div>
            </div>
            {/* КОНЕЦ контейнер для кружка и подписи к нему */}

            {/* контейнер для учителя и подписи к нему */}
            <div className="container-imgs-titles">
                {/* контейнер для фото учителя */}
                <div className="container-img">
                    <img src={imgTeacherSrc} alt="" />
                    {/* контейнер для краткого описания фото (изначально он невидим) */}
                    <div>
                        <p>{discTeacher}</p>
                    </div>
                </div>
                {/* контейнер подписи */}
                <div className="container-title-imgs">
                    <h1>{titleTeacher}</h1>
                </div>
            </div>
            {/* КОНЕЦ контейнер для учителя и подписи к нему */}
        </div>
        // КОНЕЦ главный контейнер для фотографий и подписи к ним
    );
}