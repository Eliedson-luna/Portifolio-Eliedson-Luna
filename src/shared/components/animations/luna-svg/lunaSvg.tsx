import "./style.css"

export default function LunaSvg() {
    return (
        <div className="flex justify-center w-fit">
            <svg width="100" height="33" viewBox="0 0">
                <polygon
                    className="loading-polygon"
                    fill="none"
                    points="1,1 1,30 20,30 20,20 20,20 10,20 10,10 10,1 1,1"
                />
                <polygon
                    className="loading-polygon"
                    fill="none"
                    points="25,1 25,30 45,30 45,1 38,1 38,25 32,25 32,1"
                />
                <polygon
                    className="loading-polygon"
                    fill="none"
                    points="50,1 50,30 60,30 50,1"
                />
                <polygon
                    className="loading-polygon"
                    fill="none"
                    points="68,30 68,1 58,1 68,30"
                />
                <polygon
                    className="loading-polygon"
                    fill="none"
                    points="78,1 73,30 78,30 81,20 84,20 89,30 94,30 86,1"
                />
            </svg>
        </div>
    )
}