import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { ICard } from "../types"

export function useProducts() {
  const [products, setProducts] = useState<ICard[]>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  function removeProduct(tagret: ICard) {
    console.log("tar", tagret)
    setProducts(
      products.filter((i) => {
        return i.id !== tagret.id
      })
    )
  }

  function addProduct(product: ICard) {
    setProducts((prev) => [...prev, product])
    // setProducts([...products, product])
  }

  async function fetchProducts() {
    const response = await axios.get<ICard[]>(
      `https://jsonplaceholder.typicode.com/posts?_limit=${10 || 10}&_page=${1}`
    )
    setProducts(response.data)
  }

  return { products, addProduct, removeProduct }
}
