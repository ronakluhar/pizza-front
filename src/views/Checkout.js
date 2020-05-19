import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Layout, Login, DeliveryInfo } from 'containers'
import { PageHeader } from 'components'
import { useSelector } from 'react-redux'
import { calculateCartPrice, calculateCartItems } from 'utils/cartHelper'

const Checkout = () => {
  const { items, step } = useSelector((state) => ({
    items: state.cartReducers.items,
    step: state.cartReducers.step,
  }))
  return (
    <Layout>
      <PageHeader title="Checkout" />
      <Container>
        <Row>
          <Col md={8}>
            <div className="checkout-container">
              <Login step={step} />
              <DeliveryInfo step={step} />
            </div>
          </Col>
          <Col md={4}>
            <div className="checkout-wrapper">
              <div>
                Sub Total ({calculateCartItems(items)}
                {calculateCartItems(items) > 1 ? 'items' : 'item'}
                ): ${calculateCartPrice(items)}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Checkout
