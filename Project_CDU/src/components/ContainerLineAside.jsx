
export default function ContainerLineAside({children}) {

    return (
        <div className="container-line-aside">
            {/* линия слева */}
            <div className="left-line-aside"></div>
            <div>{children}</div>
        </div>
    );
}