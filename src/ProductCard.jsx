import { useState } from "react";
import ProductDescription from './ProductDescription'
import FuvoriteButton from "./FavoriteButton";
import './ProductCard.css'
function ProductCard({ Product }) {
    const [quantity, setQuantity] = useState(0);
    const [inCart, setInCart] = useState(0)
    return (
        <>
            <FuvoriteButton productName={Product.name}></FuvoriteButton>
            <h3 className="product-card__title">{Product.name}</h3>
            <ProductDescription ProductDescription={Product.description} ProductFeatures={Product.features}></ProductDescription>
            <p className="product-card__price">מחיר: ₪{Product.price.toFixed(2)}</p>
            <div className="quantity-counter">
                <button className="quantity-counter__btn" onClick={() => setQuantity(prev => prev + 1)}>➕</button>
                <p className="quantity-counter__value"> {quantity}</p>
                <button className="quantity-counter__btn" onClick={() => {
                    const newQuentity=Math.max(0, quantity - 1);
                    setQuantity(newQuentity);
                    setInCart(prev => Math.min(prev, newQuentity))
                }}>➖</button>
            </div>
            <p className="product-card__total">סה"כ: ₪{(quantity * Product.price).toFixed(2)}</p>
            <div className="product-card__actions">
                <button className="product-card__cart-btn" disabled={quantity == 0} onClick={() => setInCart(quantity)}>{inCart}🛒</button>
                <button className="product-card__clear-btn" onClick={() =>{setQuantity(0),setInCart(0)} }>✖️</button>
            </div>

        </>
    );
}

export default ProductCard;