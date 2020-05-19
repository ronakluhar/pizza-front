import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input } from 'reactstrap'
import { Link } from '@reach/router'
import { useDispatch } from 'react-redux'
import { updateCart } from 'utils/redux/actions/cart'
import _ from 'lodash'

const CartItem = ({ item, allItems }) => {
  console.log(item)
  const dispatch = useDispatch()
  return (
    <Row className="cart-item align-items-center">
      <Col md={2}>
        {item.image && (
          <img className="image" src={item.image} alt={item.name} />
        )}
      </Col>
      <Col md={7}>
        <div className="name">{item.name}</div>
        <div className="description">{item.description}</div>
        <div className="actions mt-2">
          <Input
            type="select"
            name="quantity"
            onChange={(event) => {
              const findItem = _.findIndex(allItems, { id: item.id })
              allItems.splice(findItem, 1, {
                ...allItems[findItem],
                quantity: event.target.value,
              })
              dispatch(updateCart(allItems))
            }}
          >
            <option value="1" selected={item.quantity === '1'}>
              1
            </option>
            <option value="2" selected={item.quantity === '2'}>
              2
            </option>
            <option value="3" selected={item.quantity === '3'}>
              3
            </option>
            <option value="4" selected={item.quantity === '4'}>
              4
            </option>
            <option value="5" selected={item.quantity === '5'}>
              5
            </option>
          </Input>
          <Link
            to=""
            onClick={() => {
              const newItems = _.filter(allItems, ({ id }) => id !== item.id)
              dispatch(updateCart(newItems))
            }}
          >
            Delete
          </Link>
        </div>
      </Col>
      <Col md={3} className="text-right">
        <div className="price">${item.price}</div>
      </Col>
    </Row>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    quantity: PropTypes.any,
  }),
  allItems: PropTypes.array,
}

export default CartItem
