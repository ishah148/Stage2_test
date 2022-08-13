import React from "react"
import { useProducts } from "../hooks/useProducts"
import Card from "./Card"

const CardContainer = () => {
  const { products, addProduct, removeProduct } = useProducts()
  console.log("", products)
  return (
    <div className="products__container">
      {products.map((i) => (
        <Card product={i} remove ={() => removeProduct(i)} key={i.id} />
      ))}
    </div>
  )
}

export default CardContainer
