import text_for_container_text_info from "../data.js"; // текст для блоков с информацией
import ContainerTextInfo from "../components/ContainerTextInfo";


export default function MainSection() {
    const i = text_for_container_text_info;

    return (
        <section>
            {/* Приветствие */}
            <ContainerTextInfo key={i[0].id} titleText={i[0].titleText} colorfulText={i[0].colorfulText} text={i[0].text}/>
        </section>
    );
}
