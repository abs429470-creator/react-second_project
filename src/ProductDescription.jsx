import { useState } from "react";
import './ProductDescription.css'

function ProductDescription({ description, features }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="product-description">
            <p className="product-description__text">{description}</p>
            {isExpanded && (
                <ul className="product-description__features">
                    {features.map((feature) => (<li key={feature}>{feature}</li>))}
                </ul>
            )}
            <button className="product-description__toggle" onClick={() => setIsExpanded(prev => !prev)}>
                {isExpanded ? "הצג פחות" : "הצג עוד"}
            </button>
        </div>
    )
}

export default ProductDescription;
