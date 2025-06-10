export default function ContainerListInfo({titleText, list}) {

    return (
        <div className="container-text-info">
            {/* заголовок */}
            <div>
                <h2>{titleText}</h2>
            </div>
            {/* список*/}
            <div className="div-list-info">
                <ol>
                    {list.map((i, index )=> (<li key={index}>{i}</li>)
                    )}
                </ol>
            </div>
        </div>
    );
}