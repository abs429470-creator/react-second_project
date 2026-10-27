import { useState } from "react";

function ProductDescription({ ProductDescription, ProductFeatures }) {
    const [showDescription, setShowDescription] = useState(true);
    return (
        <>
            <div>
                <p>{ProductDescription}<br /> {showDescription ? "" :
                    <ul>
                        {ProductFeatures.map((description) => (<li>{description}</li>))}
                    </ul>}</p>
                <button onClick={() => setShowDescription(!showDescription)}>{showDescription ? "הצג עוד" : "הצג פחות"}</button>
            </div>
        </>
    )
}

export default ProductDescription;