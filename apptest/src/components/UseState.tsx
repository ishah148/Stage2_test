import React, { useState } from "react"

const ButtonShah = () => {
  // let count = 1
  const [first, setfirst] = useState(0)
  function increment() {
    setfirst(first + 1)
  }
  return (
    <div>
      <button onClick={increment}></button>
      <h1>{first}</h1>
    </div>
  )
}

export default ButtonShah
