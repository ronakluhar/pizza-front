import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import { Layout } from 'containers'
import { PageHeader, OrderItem } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders } from 'utils/redux/actions/orders'
import { Helmet } from 'react-helmet'

const MyOrders = () => {
  const { token, orders } = useSelector((state) => ({
    token: state.authReducers.user && state.authReducers.user.api_token,
    orders: state.orderReducers.myOrders,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    token && dispatch(myOrders(token))
  }, [dispatch, token])

  return (
    <Layout>
      <Helmet>
        <title>My Orders - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <PageHeader title="My Orders" />
      <Container>
        {orders &&
          orders.map((order) => <OrderItem key={order.id} order={order} />)}
      </Container>
    </Layout>
  )
}

export default MyOrders
