import React from 'react'
import { Router } from '@reach/router'
import Home from 'views/Home'
import Cart from 'views/Cart'
import Checkout from 'views/Checkout'
import OrderSuccess from 'views/OrderSuccess'
import MyOrders from 'views/MyOrders'

const AppRouter = () => (
  <Router>
    <Home path="/" />
    <Cart path="/cart" />
    <Checkout path="/checkout" />
    <OrderSuccess path="/order-success" />
    <MyOrders path="/my-orders" />
  </Router>
)

export default AppRouter
