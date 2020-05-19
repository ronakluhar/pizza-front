import React from 'react'
import { Router } from '@reach/router'
import Home from 'views/Home'
import Cart from 'views/Cart'
import Checkout from 'views/Checkout'

const AppRouter = () => (
  <Router>
    <Home path="/" />
    <Cart path="/cart" />
    <Checkout path="/checkout" />
  </Router>
)

export default AppRouter
