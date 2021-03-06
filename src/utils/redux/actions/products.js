import axios from 'axios'
import {
  PRODUCTS_FETCH_PENDING,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAILURE,
} from 'utils/redux/types'

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: PRODUCTS_FETCH_PENDING })

    axios
      .get(`${process.env.REACT_APP_API_URL}/products`)
      .then((res) => {
        dispatch({
          type: PRODUCTS_FETCH_SUCCESS,
          products: res.data.data.products,
        })
      })
      .catch((error) => {
        console.warn(error)
        dispatch({ type: PRODUCTS_FETCH_FAILURE })
      })
  }
}
