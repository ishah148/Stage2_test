// import TextField from "@mui/material/TextField"
// import { margin } from "@mui/system"
import React, { useState } from "react"
const Input = () => {
  const [val, setval] = useState("placeholder")

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("", e.target.value)
    setval(e.target.value)
  }
  const onSubmitInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log("", e.target);
    // setval(e.target.value)
  }

  return (
    <div>
      <input
        placeholder="Search..."
        type="text"
        value={val}
        onChange={(e) => {
          onChangeInput(e)
        }}
      />
      <p>v-bind:{val}</p>
    </div>
  )
}

export default Input
