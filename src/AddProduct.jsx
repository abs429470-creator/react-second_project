import { useState } from "react";
import './AddProduct.css'

// מגבלות השדות (מתועדות במקום אחד כדי שיהיו קלות לשינוי)
const LIMITS = {
    nameMax: 50,
    descriptionMax: 200,
    featureMax: 40,
    priceMax: 1000000, // מיליון ₪ — מונע מספרים מופרכים
    maxFeatures: 10          // מגבלת אורך ותכונות מונעת "טריקת" השדות
};

const EMPTY_FORM = {
    name: "",
    price: "",        // מחרוזת ולא number — כדי לאפשר ריקון של השדה
    description: "",
    features: []      // מערך של { id, value }
};

// כל הוולידציות במקום אחד — מחזיר אובייקט שגיאות לפי שם שדה
const validate = (product) => {
    const errors = {};

    const name = product.name.trim();
    if (name === "") {
        errors.name = "חובה למלא שם מוצר";
    } else if (name.length > LIMITS.nameMax) {
        errors.name = `שם המוצר יכול להכיל עד ${LIMITS.nameMax} תווים`;
    }

    // price הוא מחרוזת, לכן מרכזים אותה קודם
    const priceRaw = String(product.price).trim();
    const price = Number(priceRaw);
    if (priceRaw === "") {
        errors.price = "חובה למלא מחיר";
    } else if (!Number.isFinite(price)) {
        errors.price = "המחיר חייב להיות מספר";
    } else if (price <= 0) {
        errors.price = "המחיר חייב להיות גדול מאפס";
    } else if (price > LIMITS.priceMax) {
        errors.price = `המחיר יכול להיות עד ₪${LIMITS.priceMax}`;
    }

    if (product.description.trim().length > LIMITS.descriptionMax) {
        errors.description = `התיאור יכול להכיל עד ${LIMITS.descriptionMax} תווים`;
    }

    if (product.features.some(feature => feature.value.trim().length > LIMITS.featureMax)) {
        errors.features = `כל תכונה יכולה להכיל עד ${LIMITS.featureMax} תווים`;
    }

    return errors;
};

function AddProduct({ onAddProduct, productId }) {
    const [newProduct, setNewProduct] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    // שדה שנגעת בו ויצאת — רק אז מציגים לו שגיאה, כדי לא להציק באמצע מילוי
    const [touched, setTouched] = useState({});

    const markTouched = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        // מעדכנים שגיאות לפי המצב הנוכחי, כדי שההודעה תיעלם ברגע שהתיקון נעשה
        setErrors(validate(newProduct));
    };

    // מוסיף תכונה חדשה עם id קבוע וייחודי (ה-id משמש רק ל-React, לא נשלח למוצר)
    const handleFeatureAdd = () => {
        if (newProduct.features.length >= LIMITS.maxFeatures) return;
        setNewProduct(prev => ({
            ...prev,
            features: [...prev.features, { id: crypto.randomUUID(), value: "" }]
        }));
    };

    // עדכון תכונה לפי ה-id שלה (ולא לפי המיקום במערך)
    const handleFeatureChange = (id, value) => {
        setNewProduct(prev => ({
            ...prev,
            features: prev.features.map(feature => (
                feature.id === id ? { ...feature, value } : feature
            ))
        }));
    };

    // הסרת תכונה לפי ה-id שלה
    const handleFeatureRemove = (id) => {
        setTouched(prev => ({ ...prev, features: true }));
        setNewProduct(prev => ({
            ...prev,
            features: prev.features.filter(feature => feature.id !== id)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(newProduct);
        setErrors(validationErrors);
        setTouched({ name: true, price: true, description: true, features: true });

        // לא מוסיפים מוצר כשיש שגיאה — בפרט כשיש מוצר בלי מחיר
        if (Object.keys(validationErrors).length > 0) return;

        const product = {
            id: productId,
            name: newProduct.name.trim(),
            // מעגלים לשתי ספרות אחרי הנקודה
            price: Math.round(Number(newProduct.price) * 100) / 100,
            description: newProduct.description.trim(),
            // מחזירים מערך מחרוזות בלבד — ה-id לא נשלח החוצה
            features: newProduct.features
                .map(feature => feature.value.trim())
                .filter(value => value !== "")
        };
        onAddProduct(product);
        setNewProduct(EMPTY_FORM);
        setErrors({});
        setTouched({});
    }

    return (
        <form className="add-product" onSubmit={handleSubmit} noValidate>
            <div className="add-product__field">
                <label className="add-product__label" htmlFor="productName">שם מוצר:</label>
                <input
                    className="add-product__input"
                    type="text"
                    name="productName"
                    id="productName"
                    value={newProduct.name}
                    maxLength={LIMITS.nameMax}
                    aria-invalid={Boolean(errors.name)}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                    onBlur={() => markTouched("name")}
                />
                {touched.name && errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="add-product__field">
                <label className="add-product__label" htmlFor="productPrice">מחיר:</label>
                <input
                    className="add-product__input"
                    type="number"
                    name="productPrice"
                    id="productPrice"
                    // צעד של 5 אגורות
                    step="0.05"
                    min="0"
                    max={LIMITS.priceMax}
                    // מחרוזת ריקה מאפשרת לרוקן את השדה לגמרי
                    value={newProduct.price}
                    aria-invalid={Boolean(errors.price)}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, price: e.target.value }))}
                    onBlur={() => markTouched("price")}
                />
                {touched.price && errors.price && <p className="form-error">{errors.price}</p>}
            </div>

            <div className="add-product__field">
                <label className="add-product__label" htmlFor="productDescription">תיאור המוצר:</label>
                <input
                    className="add-product__input"
                    type="text"
                    name="productDescription"
                    id="productDescription"
                    value={newProduct.description}
                    maxLength={LIMITS.descriptionMax}
                    aria-invalid={Boolean(errors.description)}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                    onBlur={() => markTouched("description")}
                />
                {touched.description && errors.description && <p className="form-error">{errors.description}</p>}
            </div>

            <div className="add-product__field">
                <p className="add-product__legend">תכונות המוצר:</p>
                <div className="add-product__features">
                    {newProduct.features.map(feature => (
                        <div className="add-product__feature-row" key={feature.id}>
                            <input
                                className="add-product__input"
                                type="text"
                                value={feature.value}
                                maxLength={LIMITS.featureMax}
                                onChange={(e) => handleFeatureChange(feature.id, e.target.value)}
                                placeholder="תיאור התכונה"
                            />
                            <button
                                className="add-product__remove-btn"
                                type="button"
                                onClick={() => handleFeatureRemove(feature.id)}
                            >
                                הסר
                            </button>
                        </div>
                    ))}
                    {touched.features && errors.features && <p className="form-error">{errors.features}</p>}
                    <button
                        className="add-product__add-feature-btn"
                        type="button"
                        onClick={handleFeatureAdd}
                        disabled={newProduct.features.length >= LIMITS.maxFeatures}
                    >
                        הוסף תכונה
                    </button>
                </div>
            </div>
            <button className="add-product__submit-btn" type="submit">הוסף</button>
        </form>
    )
}

export default AddProduct;
