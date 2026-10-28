import { useState } from "react";
import ProductDescription from './ProductDescription'
import FavoriteButton from "./FavoriteButton";
import './ProductCard.css'
function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    return (
        <>
            <FavoriteButton productName={product.name}></FavoriteButton>
            <h3 className="product-card__title">{product.name}</h3>
            <ProductDescription description={product.description} features={product.features}></ProductDescription>
            <p className="product-card__price">מחיר: ₪{product.price.toFixed(2)}</p>
            <div className="quantity-counter">
                <button className="quantity-counter__btn" onClick={() => setQuantity(prev => prev + 1)}>➕</button>
                <p className="quantity-counter__value"> {quantity}</p>
                <button className="quantity-counter__btn" onClick={() => {
                    const newQuantity = Math.max(0, quantity - 1);
                    setQuantity(newQuantity);
                    setCartQuantity(prev => Math.min(prev, newQuantity))
                }}>➖</button>
            </div>
            <p className="product-card__total">סה"כ: ₪{(quantity * product.price).toFixed(2)}</p>
            <div className="product-card__actions">
                <button className="product-card__cart-btn" disabled={quantity === 0} onClick={() => setCartQuantity(quantity)}>{cartQuantity}🛒</button>
                <button className="product-card__clear-btn" onClick={() => { setQuantity(0); setCartQuantity(0); }}>✖️</button>
            </div>

        </>
    );
}

export default ProductCard;
