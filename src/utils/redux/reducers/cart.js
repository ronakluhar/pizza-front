import _ from 'lodash'
import { ADD_TO_CART_PENDING, ADD_TO_CART_SUCCESS } from 'utils/redux/types'

const initialState = {
  loading: false,
  errors: false,
  items: [],
}

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_PENDING:
      return { ...state, loading: true, errors: false }
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
        items: _.concat(...state.items, action.item),
      }
    default:
      return { ...state }
  }
}

export default cartReducers
