import React, { useEffect } from 'react'
import { PizzaCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'utils/redux/actions/products'

const PizzaList = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => ({
    products: state.productsReducers.products,
  }))

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="pizza-list">
      {products != null &&
        products.map((product) => (
          <PizzaCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default PizzaList
