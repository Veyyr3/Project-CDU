// #region фото
    import img1 from '../assets/Images/gallery/gal_1.jpg';
    import img2 from "../assets/Images/gallery/gal_2.jpg";
    import img3 from "../assets/Images/gallery/gal_3.jpg";
    import img4 from "../assets/Images/gallery/gal_4.jpg";
    import img6 from "../assets/Images/gallery/gal_6.jpg";
// #endregion фото

export default function GallerySection() {
    const imgSrcs = [img1, img2, img3, img4, img6] // список источников фото

    return (
        <section id="gallery-section" className="container-info">
            <div className="container-title">
                <h2>Галерея</h2>
            </div>

            <div className="container-imgs">
                {/* автоматизация вывода фото */}
                {imgSrcs.map((i, index)=> {
                    return <img className="isimage" src={i} alt="" />;
                })
                }
            </div>
        </section>
    );
}