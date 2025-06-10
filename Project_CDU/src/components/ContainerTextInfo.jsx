export default function ContainerTextInfo({titleText, colorfulText, text}) {

    return (
        <div className="container-text-info">
            <div>
                <h1>{titleText}</h1>
            </div>
            <div>
                <p>{`${colorfulText} ${text}`}</p>
            </div>
        </div>
    );
}