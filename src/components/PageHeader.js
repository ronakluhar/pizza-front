import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <Container>
        <h1>{title}</h1>
      </Container>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageHeader
