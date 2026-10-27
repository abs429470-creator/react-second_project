import { useState } from "react";
import './FavoriteButton.css'
function FuvoriteButton({ productName }) {
    const [isFuvorite, setIsFuvorite] = useState(true);
    return (<>
        <button className={"favorite-button" + (isFuvorite ? " favorite-button--active" : "")} onClick={()=>setIsFuvorite(!isFuvorite)}>{isFuvorite? "🤍 הוסף את "+productName+" למועדפים":"💜 מועדף"}
        </button>
    </>
    )
}

export default FuvoriteButton