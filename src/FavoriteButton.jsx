import { useState } from "react";
import './FavoriteButton.css'
function FavoriteButton({ productName }) {
    const [isFavorite, setIsFavorite] = useState(false);
    return (<>
        <button className={"favorite-button" + (isFavorite ? " favorite-button--active" : "")} onClick={()=>setIsFavorite(!isFavorite)}>{isFavorite? "💜 מועדף":"🤍 הוסף את "+productName+" למועדפים"}
        </button>
    </>
    )
}

export default FavoriteButton