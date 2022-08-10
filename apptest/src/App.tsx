import React from "react"
import logo from "./logo.svg"
import AboutPage from "./components/shah"
// import ButtonS from "./components/ButtonS"
import "./App.css"
import ButtonShah from "./components/UseState"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react shah</h1>
        <AboutPage />
        <ButtonShah/>
        <AboutPage />
      </header>
    </div>
  )
}

export default App
