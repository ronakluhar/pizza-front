import { MY_ORDERS_PENDING, MY_ORDERS_SUCCESS } from '../types'

const initialState = {
  loading: false,
  errors: null,
  myOrders: null,
}

const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case MY_ORDERS_PENDING:
      return { ...state, loading: true, errors: false, myOrders: null }
    case MY_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
        myOrders: action.myOrders,
      }
    default:
      return { ...state }
  }
}

export default orderReducers
