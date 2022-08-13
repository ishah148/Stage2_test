import Button from "@mui/material/Button"
import React from "react"
import { ICard } from "../types"

const Card = (props: { product: ICard, remove: () => void }) => {
  return (
    <div className="card__container">
      <p>{props.product.title}</p>
      <p>{props.product.body}</p>
      <Button>Open</Button>
      <Button style={{background:'#ff110054'}} onClick={props.remove} >Delete</Button>
    </div>
  )
}

export default Card
