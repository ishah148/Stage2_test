import React from "react"
import logo from "./logo.svg"
import AboutPage from "./components/shah"
import "./App.css"
import ButtonS from "./components/buttonS"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react shah</h1>
        <AboutPage />
        <ButtonS />
        <AboutPage />
      </header>
    </div>
  )
}

export default App
