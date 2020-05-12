import React from 'react'
import PropTypes from 'prop-types'
import { Navigation } from 'components'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
}

export default Layout
