import { useState } from "react";
import ProductDescription from './ProductDescription'
import FuvoriteButton from "./FavoriteButton";
function ProductCard({ Product }) {
    const [quantity, setQuantity] = useState(0);
    const [inCart, setInCart] = useState(0)
    return (
        <>
            <FuvoriteButton productName={Product.name}></FuvoriteButton>
            <h3>{Product.name}</h3>
            <ProductDescription ProductDescription={Product.description} ProductFeatures={Product.features}></ProductDescription>
            <p>מחיר: ₪{Product.price.toFixed(2)}</p>
            <div>
                <button onClick={() => setQuantity(prev => prev + 1)}>➕</button>
                <p> {quantity}</p>
                <button onClick={() => {
                    setQuantity(prev => Math.max(0, prev - 1));
                    setInCart(prev => Math.min(prev-1, quantity))
                }}>➖</button>
            </div>
            <p>סה"כ: ₪{(quantity * Product.price).toFixed(2)}</p>
            <div>
                <button disabled={quantity == 0} onClick={() => setInCart(quantity)}>{inCart}🛒</button>
                <button onClick={() =>{setQuantity(0),setInCart(0)} }>✖️</button>
            </div>

        </>
    );
}

export default ProductCard;