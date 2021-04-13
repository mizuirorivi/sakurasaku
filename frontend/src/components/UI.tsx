
interface Props {
    rating: number
}

export default function MainUI(rating: Props) {

    return (
        <>
            <h1>sakurasaku🌸</h1>
            <h3>良質なamazon商品を即時判断！</h3>
            <div className="container">
                <h3> この商品のレーティングは・・・ </h3>
                <h3> {rating} / 5.0 </h3>
            </div>
        </>
    )
}

