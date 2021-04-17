import React from "react"

// catchable objects
interface Props {
}

// isntCompatible Components
const NonSupported: React.FC<Props> = ({ }) => {

    return (
        <>
            <div className="container">
                <h3> 現在閲覧のページは現在対応していません </h3>
            </div>
        </>
    )
}

export default NonSupported