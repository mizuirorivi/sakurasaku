import React from "react"

const MainUI: React.FC<any> = (props: any) => {

    return (
        <>
            <h1>sakurasaku🌸</h1>
            <h4>良質なamazon商品を即時判断！</h4>
            <div className="container">
                <h3> この商品のレーティングは・・・ </h3>
                {props.rating !== -1
                    ? <h3> {props.rating} / 5.0 </h3>
                    : <>FETCHING</>}
            </div>
        </>
    )
}

export default MainUI