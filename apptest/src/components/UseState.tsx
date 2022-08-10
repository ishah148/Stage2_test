import Button from "@mui/material/Button"
import React, { useState } from "react"

const ButtonShah = () => {
  // let count = 1
  const [incr, setincr] = useState(0)
  function increment() {
    setincr(incr + 1)
  }
  function decrement() {
    setincr(incr <= 1 ? incr : incr - 1);
    // setincr(incr - 1)
  }

  return (
    <div>
      <Button onClick={increment} variant="contained">
        Plus
      </Button>
      <Button onClick={decrement} variant="contained">
        Minus
      </Button>
      <h1>{incr}</h1>
    </div>
  )
}

export default ButtonShah
