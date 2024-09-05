import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Routers from "./router"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routers />
    </div>
  )
}

export default App