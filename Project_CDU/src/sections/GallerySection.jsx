// #region фото
    import img1 from '../assets/Images/gallery/gal_1.jpg';
    import img2 from "../assets/Images/gallery/gal_2.jpg";
    import img3 from "../assets/Images/gallery/gal_3.jpg";
    import img4 from "../assets/Images/gallery/gal_4.jpg";
    import img5 from "../assets/Images/gallery/gal_6.jpg";
// #endregion фото

// для анимации (плавное появление когда в поле зрения) но не оборачивать в div
import FadeInOnScroll_no_container from "../components/forAnimation/FadeInOnScroll_no_container";

export default function GallerySection() {
    const imgSrcs = [img1, img2, img3, img4, img5] // список источников фото

    return (
        <section id="gallery-section" className="container-info">
            {/* заголовок */}
            <FadeInOnScroll_no_container delay={0.1}>
                <div className="container-title">
                    <h2>Галерея</h2>
                </div>
            </FadeInOnScroll_no_container>

            <div className="container-imgs">
                {/* автоматизация вывода фото */}
                {imgSrcs.map((i, index) => {
                    return (
                        <FadeInOnScroll_no_container delay={0.2}>
                            <div>
                                <img
                                    key={index}
                                    className="isimage"
                                    src={i}
                                    alt=""
                                />
                            </div>
                        </FadeInOnScroll_no_container>
                    );
                })}
            </div>
        </section>
    );
}