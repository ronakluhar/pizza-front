import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Layout } from 'containers'
import { PageHeader, CartItem } from 'components'
import { useSelector } from 'react-redux'
import { calculateCartPrice, calculateCartItems } from 'utils/cartHelper'
import { useNavigate } from '@reach/router'
import { Helmet } from 'react-helmet'

const Cart = () => {
  const history = useNavigate()
  const { items } = useSelector((state) => ({
    items: state.cartReducers.items,
  }))
  const totalItems = calculateCartItems(items)
  return (
    <Layout>
      <Helmet>
        <title>Cart - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <PageHeader title="Cart" />
      <Container>
        <Row>
          <Col md={8}>
            {totalItems > 0 ? (
              items.map((item) => (
                <CartItem key={item.id} item={item} allItems={items} />
              ))
            ) : (
              <h3 className="mt-3">You dont have any items added.</h3>
            )}
          </Col>
          <Col md={4}>
            <div className="checkout-wrapper">
              <div>
                Sub Total ({totalItems} {totalItems > 1 ? 'items' : 'item'}
                ): ${calculateCartPrice(items)}
              </div>
              <Button
                color="primary"
                className="mt-3"
                block
                onClick={() => history('/checkout', { replace: true })}
                disabled={!(totalItems > 0)}
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
