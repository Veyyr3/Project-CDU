export default function ContainerTextInfo({titleText, colorfulText, text}) {

    return (
        <div className="container-info">
            {/* заголовок */}
            <div className="container-title">
                <h2>{titleText}</h2>
            </div>
            {/* основной текст */}
            <div className="div-text-info">
                <p>
                    <strong>{colorfulText}</strong> {`${text}`}
                </p>
            </div>
        </div>
    );
}