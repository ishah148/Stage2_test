import React from "react"
import AboutPage from "./components/shah"
// import ButtonS from "./components/ButtonS"
import "./App.scss"
import ButtonShah from "./components/UseState"
import Input from "./components/Input"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react shah</h1>
        <AboutPage />
        <ButtonShah />
        <Input />
        <div className="card__wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </header>
    </div>
  )
}

export default App
