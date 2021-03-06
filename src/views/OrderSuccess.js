import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@reach/router'
import { Layout } from 'containers'
import { PageHeader } from 'components'
import { Helmet } from 'react-helmet'

const OrderSuccess = () => {
  return (
    <Layout>
      <Helmet>
        <title>Order Success - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <PageHeader title="Order Success" />
      <div className="mt-5">
        <div className="content text-center">
          <FontAwesomeIcon icon={faCheckCircle} size="5x" color="green" />
          <h2 className="mt-2">Order Placed Sucessfully.</h2>
          <Link to="/my-orders">View My Orders</Link>
        </div>
      </div>
    </Layout>
  )
}

export default OrderSuccess
