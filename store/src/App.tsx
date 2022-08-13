import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Button from "@mui/material/Button"
import CardContainer from "./components/CardContainer"
import StoreApi from "./utils/Api"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Project</h1>
      </header>

      <CardContainer />
    </div>
  )
}

export default App
