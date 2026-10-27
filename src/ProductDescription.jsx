import { useState } from "react";

function ProductDescription({ ProductDescriptionShort, ProductDescriptionLong }) {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <>
            <div>
                <p>{ProductDescriptionShort}<br/>{showDescription ? "":ProductDescriptionLong}</p>
                <button onClick={() => setShowDescription(!showDescription)}>{showDescription ? "הצג עוד" : "הצג פחות"}</button>
            </div>
        </>
    )
}

export default ProductDescription;