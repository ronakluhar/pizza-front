import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Layout } from 'containers'
import { PageHeader, CartItem } from 'components'
import { useSelector } from 'react-redux'
import { calculateCartPrice } from 'utils/cartHelper'
import { useNavigate } from '@reach/router'

const Cart = () => {
  const history = useNavigate()
  const { items } = useSelector((state) => ({
    items: state.cartReducers.items,
  }))
  return (
    <Layout>
      <PageHeader title="Cart" />
      <Container>
        <Row>
          <Col md={8}>
            {items &&
              items.map((item) => (
                <CartItem key={item.id} item={item} allItems={items} />
              ))}
          </Col>
          <Col md={4}>
            <div className="checkout-wrapper">
              <div>
                Sub Total ({items.length} {items.length > 1 ? 'items' : 'item'}
                ): ${calculateCartPrice(items)}
              </div>
              <Button
                color="primary"
                className="mt-3"
                block
                onClick={() => history('/checkout', { replace: true })}
              >
                Proceed to Buy
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Cart
