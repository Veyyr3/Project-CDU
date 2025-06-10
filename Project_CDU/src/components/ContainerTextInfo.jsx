export default function ContainerTextInfo({titleText, colorfulText, text}) {

    return (
        <div className="container-text-info">
            <div>
                <h2>{titleText}</h2>
            </div>
            <div>
                <p>
                    <strong>{colorfulText}</strong> {`${text}`}
                </p>
            </div>
        </div>
    );
}