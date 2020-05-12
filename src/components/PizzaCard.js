import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from 'utils/redux/actions/products'

const PizzaCard = ({ product }) => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => ({
    loading: state.cartReducers.loading,
  }))
  return (
    <div className="pizza-card">
      {product.image && (
        <img className="image" src={product.image} alt={product.name} />
      )}
      <div className="name">{product.name}</div>
      <div className="description">{product.description}</div>
      <div className="footer">
        <div className="price">${product.price}</div>
        <Button
          className="add-to-cart"
          onClick={() => dispatch(addToCart(product))}
        >
          {loading ? 'Loading...' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  )
}

PizzaCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
}

export default PizzaCard
