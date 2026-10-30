import { useState } from 'react'
import './App.css'
import Header from './Header'
import Login from './Login'
import Cart from './Cart'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Login />
      <Cart />
    </>
  )
}

export default App
