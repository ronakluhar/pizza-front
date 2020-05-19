import axios from 'axios'
import { MY_ORDERS_PENDING, MY_ORDERS_SUCCESS } from '../types'

export const myOrders = (token) => {
  return (dispatch) => {
    dispatch({ type: MY_ORDERS_PENDING })
    axios
      .get(`${process.env.REACT_APP_API_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: MY_ORDERS_SUCCESS, myOrders: res.data.data.orders })
      })
  }
}
