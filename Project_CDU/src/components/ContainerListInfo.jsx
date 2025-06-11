export default function ContainerListInfo({titleText, list}) {

    return (
        <div className="container-info">
            {/* заголовок */}
            <div className="container-title">
                <h2>{titleText}</h2>
            </div>
            {/* список*/}
            <div className="div-list-info">
                <ol>
                    {list.map((i, index) => (
                        <li key={index}>
                            <p>{i}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}