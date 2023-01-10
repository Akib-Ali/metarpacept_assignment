import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Title } from './components/title'
import { FetchApi } from './components/fetchapi'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Title/>
      <FetchApi/>
    </div>
  )
}

export default App
