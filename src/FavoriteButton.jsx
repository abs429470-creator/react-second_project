import { useState } from "react";
function FuvoriteButton({ productName }) {
    const [isFuvorite, setIsFuvorite] = useState(true);
    return (<>
        <button onClick={()=>setIsFuvorite(!isFuvorite)}>{isFuvorite? "🤍 הוסף את "+productName+" למועדפים":"💜 מועדף"}
        </button>
    </>
    )
}

export default FuvoriteButton