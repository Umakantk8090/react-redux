import React from 'react'
import Counter from './Components/Counter'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Cart from './Components/Cart'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Counter /> */}
      <Navbar />
      <Routes>
      <Route path='/' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
