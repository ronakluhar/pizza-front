import React from 'react'
import { Router } from '@reach/router'
import Home from 'views/Home'

const AppRouter = () => (
  <Router>
    <Home path="/" />
  </Router>
)

export default AppRouter
