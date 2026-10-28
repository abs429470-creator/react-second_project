import { useState } from "react"
import dataProductList from "./productList.json"
import './App.css'
import ProductCard from './ProductCard'
import ContactForm from './ContactForm'
import AddProduct from "./AddProduct"
import ThemeToggle from "./ThemeToggle"

function App() {
  const [productList, setProductList] = useState(dataProductList);

  const onAddProduct = (newProduct) => {
    setProductList(prev => [...prev, newProduct])
  }

  const nextProductId = productList.length > 0
    ? Math.max(0, ...productList.map(p => p.id)) + 1
    : 1;

  return (
    <>
    <ThemeToggle></ThemeToggle>
    <h1>החנות שלנו</h1>
      <div id="productListDiv">
        {
          productList.map((product) => (
            <div className="product-card" key={product.id}>
              <button className="delete-button" onClick={() => setProductList(prev => prev.filter((item) => item.id !== product.id))}>❌</button>
              <ProductCard product={product}></ProductCard>
            </div>
          ))
        }
      </div>
    <div className="add-product-section">
      <AddProduct onAddProduct={onAddProduct} productId={nextProductId}></AddProduct>
    </div>
      <div>
        <ContactForm></ContactForm>
      </div>
    </>
  )
}

export default App
