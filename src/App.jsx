import { useState } from "react"
import dataProductList from "./productList.json"
import './App.css'
import ProductCard from './ProductCard'
import ContactForm from './ContactForm'

function App() {
  const [productList, setProductList] = useState(dataProductList);
  return (
    <>
    <h1>החנות שלנו</h1>
      <div id="productListDiv">
        {
          productList.map((product) => (
            <div className="product-card" key={product.id}>
              <button className="delete-button" onClick={() => setProductList(productList.filter((item) => item.id != product.id))}>❌</button>
              <ProductCard Product={product}></ProductCard>
            </div>
          ))
        }
      </div>
      <div>
        <ContactForm></ContactForm>
      </div>
    </>
  )
}

export default App
