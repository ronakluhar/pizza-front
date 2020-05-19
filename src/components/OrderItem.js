import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Row, Col } from 'reactstrap'

const OrderItem = ({ order }) => {
  return (
    <div className="order-wrapper">
      <div className="header">
        <div>
          <div>ORDER PLACED</div>
          <div>{moment(order.created_at).format('DD MMM YYYY')}</div>
        </div>
        <div>
          <div>TOTAL</div>
          <div>${order.subtotal}</div>
        </div>
        <div>
          <div>Order: #{order.order_number}</div>
          <div>Status: {order.status}</div>
        </div>
      </div>
      <div className="info">
        {order.items.map((item) => (
          <Row key={item.id} className="cart-item align-items-center">
            <Col md={2}>
              {item.product.image && (
                <img
                  className="image"
                  src={item.product.image}
                  alt={item.product.name}
                />
              )}
            </Col>
            <Col md={7}>
              <div className="name">{item.product.name}</div>
              <div className="description">{item.product.description}</div>
            </Col>
            <Col md={3} className="text-right">
              <div className="price">
                ${item.product.price} x {item.quantity} = ${item.total}
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  )
}

OrderItem.propTypes = {
  order: PropTypes.object,
}

export default OrderItem
