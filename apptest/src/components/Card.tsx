import React from "react"
import "../styles/card.scss"
import { TestProps } from "../types"
const Card = (props: TestProps) => {

  return (
    <div className="card">
      <p className="one">{props.id}</p>
      <p className="two">{props.descr}</p>
    </div>
  )
}

export default Card
