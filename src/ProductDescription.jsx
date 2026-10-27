import { useState } from "react";
import './ProductDescription.css'

function ProductDescription({ ProductDescription, ProductFeatures }) {
    const [showDescription, setShowDescription] = useState(true);
    return (
        <>
            <div className="product-description">
                <p className="product-description__text">{ProductDescription}<br /> {showDescription ? "" :
                    <ul className="product-description__features">
                        {ProductFeatures.map((description) => (<li>{description}</li>))}
                    </ul>}</p>
                <button className="product-description__toggle" onClick={() => setShowDescription(!showDescription)}>{showDescription ? "הצג עוד" : "הצג פחות"}</button>
            </div>
        </>
    )
}

export default ProductDescription;