import React from "react"

// catchable objects
interface Props {
    rating: number;
}

// Compatible Components
const Compatible: React.FC<Props> = ({ rating }) => {

    return (
        <>
            <div className="container">
                <h3> この商品のレーティングは・・・ </h3>
                {rating !== -1
                    ? <h3> {rating} / 5.0 </h3>
                    : <>FETCHING</>}
            </div>
        </>
    )
}

export default Compatible