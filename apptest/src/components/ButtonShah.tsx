import React, { useState } from "react"

const ButtonShah = () => {
  let count = 1
  const [first, setfirst] = useState(count)
  return (
    <div>
      <button onClick={() => setfirst++}></button>
      <h1>{count}</h1>
    </div>
  )
}

export default ButtonShah;
