import React from "react";
import Compatible from "./Compatible"
import NonSupported from "./NonSupported"
// catchable objects
interface Props {
    currentURL: string;
    rating: number;
    compSites: Array<string>
}

// MainUI Components
const MainUI: React.FC<Props> = ({ currentURL, rating, compSites }) => {

    /******** methods ********/
    const methods = {
        isntCompatible: () => {
          compSites.forEach((sites: string) => {
            if (currentURL.indexOf(sites) !== -1) return true
          })
          return false
        }
      }

    return (
        <>
            <h1>sakurasaku🌸</h1>
            <h4>良質なamazon商品を即時判断！</h4>
            {methods.isntCompatible()
                ? <Compatible rating={rating} />
                : <NonSupported />
            }
        </>
    )
}

export default MainUI