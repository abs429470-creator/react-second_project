import { useState } from "react";
import ProductDescription from './ProductDescription'
function QuantityCounter({ ProductName,ProductDescriptionShort,ProductDescriptionLong, ProductPrice }) {
    const [quantity, setQuantity] = useState(0);
    return (
        <>
            <h3>{ProductName}</h3>
            <ProductDescription ProductDescriptionShort={ProductDescriptionShort} ProductDescriptionLong={ProductDescriptionLong}></ProductDescription>
            <p>מחיר: ₪{ProductPrice.toFixed(2)}</p>
            <p>כמות: {quantity}</p>
            <p>סה"כ: ₪{(quantity * ProductPrice).toFixed(2)}</p>
            <div>
                <button onClick={() => setQuantity(prev => prev + 1)}>➕</button>
                <button onClick={() => setQuantity(prev => Math.max(0, prev - 1))}>➖</button>
                <button onClick={() => setQuantity(0)}>✖️</button>
            </div>

        </>
    );
}

export default QuantityCounter;