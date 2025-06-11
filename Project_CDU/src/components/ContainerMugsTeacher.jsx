
export default function ContainerMugsTeacher({imgMugSrc, imgTeacherSrc, titleMug, titleTeacher, discMug, discTeacher}) {
    
    return (
        // главный контейнер для фотографий и подписи к ним
        <div className="main-container-imgs-titles">
            {/* контейнер для фото кружков и учителей */}
            <div className="container-imgs">


                {/* контейнер для фото кружка */}
                <div className="container-img-mug">
                    <img src={imgMugSrc} alt="" />
                    {/* контейнер для краткого описания фото (изначально он невидим) */}
                    <div className="container-hiden-discription-mug">
                        <p>{discMug}</p>
                    </div>
                </div>


                {/* контейнер для фото учителя */}
                <div className="container-img-teacher">
                    <img src={imgTeacherSrc} alt="" />
                    {/* контейнер для краткого описания фото (изначально он невидим) */}
                    <div className="container-hiden-discription-teacher">
                        <p>{discTeacher}</p>
                    </div>

                </div>

            </div>
            {/* КОНЕЦ контейнер для фото кружков и учителей */}

            {/* контейнер для подписей фотографий */}
            <div className="container-titles-for-imgs">


                {/* контейнер подписи кружков */}
                <div className="container-title-imgs-mug">
                    <h2>{titleMug}</h2>
                </div>


                {/* контейнер подписи учителей */}
                <div className="container-title-imgs-teacher">
                    <h2>{titleTeacher}</h2>
                </div>


            </div>
            {/* КОНЕЦ контейнер для подписей фотографий */}
        </div>
        // КОНЕЦ главный контейнер для фотографий и подписи к ним
    );
}