import React from "react"

interface Props {
    currentURL: string;
    rating: number;
}

const MainUI: React.FC<Props> = ({currentURL, rating}) => {
    const methods = {
        isAmazon: () => {
            if (currentURL.indexOf('amazon') === -1) return false
            return true
        }
    }

    return (
        <>
            <h1>sakurasaku🌸</h1>
            <h4>良質なamazon商品を即時判断！</h4>
            {methods.isAmazon()
                ? <div className="container">
                    <h3> この商品のレーティングは・・・ </h3>
                    {rating !== -1
                        ? <h3> {rating} / 5.0 </h3>
                        : <>FETCHING</>}
                </div>
                : <div className="container">
                    <h3> 現在閲覧のページはamazonではないようです </h3>
                    <h3> amazonにアクセスしてスコアをチェック！ </h3>
                </div>
            }
        </>
    )
}

export default MainUI