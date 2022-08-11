import React, { useState } from "react"
import Card from "./Card"

const CardStorage = () => {
  const [store, setstore] = useState([
    { descr: "1one", id: 1 },
    { descr: "2one", id: 2 },
    { descr: "3one", id: 3 },
  ])
  function pushItem() {
    // const a = store.push({ descr: "l1one", id: 4 })
    setstore([...store, { descr: "l1one", id: 4 }])
    console.log("", store)
  }
  return (
    <div>
      {store.map((i) => (
        <Card key={i.id} descr={i.descr} id={i.id} />
      ))}
      <button onClick={() => pushItem()}></button>
    </div>
  )
}

export default CardStorage
