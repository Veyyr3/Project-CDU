import img1 from '../assets/Images/main_section/main_section_1.jpg';
import img2 from '../assets/Images/main_section/main_section_2.jpg';

import text_for_container_text_info from "../data.js"; // текст для блоков с информацией
import ContainerTextInfo from "../components/ContainerTextInfo"; // компонент для текстовой информации


export default function MainSection() {
    const i = text_for_container_text_info;

    return (
        <section>
            {/* Приветствие */}
            <ContainerTextInfo
                key={i[0].id}
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
        </section>
    );
}
