import {
  SET_STEP_SUCCESS,
  PLACE_ORDER_PENDING,
  PLACE_ORDER_SUCCESS,
  ADD_TO_CART_PENDING,
  ADD_TO_CART_SUCCESS,
  UPDATE_CART_PENDING,
  UPDATE_CART_SUCCESS,
} from '../types'
import axios from 'axios'

export const addToCart = (item) => {
  const itemWithQuantity = { ...item, quantity: 1 }
  return (dispatch) => {
    dispatch({ type: ADD_TO_CART_PENDING })
    dispatch({ type: ADD_TO_CART_SUCCESS, item: itemWithQuantity })
  }
}

export const updateCart = (items) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_CART_PENDING })
    dispatch({ type: UPDATE_CART_SUCCESS, items: items })
  }
}

export const setStep = (step) => {
  return (dispatch) => {
    dispatch({ type: SET_STEP_SUCCESS, step: step })
  }
}

export const placeOrder = (token, customerInfo, address, items, navigation) => {
  const order = { ...customerInfo, ...address, items: items }
  return (dispatch) => {
    dispatch({ type: PLACE_ORDER_PENDING })
    axios
      .post(`${process.env.REACT_APP_API_URL}/orders`, order, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setStep(3))
        dispatch({ type: 'PLACE_ORDER_SUCCESS' })
        navigation('/order-success', { replace: true })
      })
  }
}
