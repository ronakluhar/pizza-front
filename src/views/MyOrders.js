import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import { Layout } from 'containers'
import { PageHeader, OrderItem } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders } from 'utils/redux/actions/orders'

const MyOrders = () => {
  const { token, orders } = useSelector((state) => ({
    token: state.authReducers.user && state.authReducers.user.api_token,
    orders: state.orderReducers.myOrders,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    token && dispatch(myOrders(token))
  }, [dispatch])

  return (
    <Layout>
      <PageHeader title="My Orders" />
      <Container>
        {orders &&
          orders.map((order) => <OrderItem key={order.id} order={order} />)}
      </Container>
    </Layout>
  )
}

export default MyOrders
