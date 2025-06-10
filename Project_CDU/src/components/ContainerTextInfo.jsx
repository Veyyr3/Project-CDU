export default function ContainerTextInfo({titleText, colorfulText, text}) {

    return (
        <div className="container-text-info">
            <h1>{titleText}</h1>
            <p>{`${colorfulText} ${text}`}</p>
        </div>
    );
}