// #region фото
    import img1 from '../assets/Images/gallery/gal_1.jpg';
    import img2 from "../assets/Images/gallery/gal_2.jpg";
    import img3 from "../assets/Images/gallery/gal_3.jpg";
    import img4 from "../assets/Images/gallery/gal_4.jpg";
    import img6 from "../assets/Images/gallery/gal_6.jpg";
// #endregion фото

export default function GallerySection() {

    return (
        <section id="gallery-section" className="container-info">
            <div className="container-title">
                <h3>Галерея</h3>
            </div>

            <div className='container-imgs'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img6} alt="" />
            </div>
        </section>
    );
}