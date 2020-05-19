import _ from 'lodash'
import {
  ADD_TO_CART_PENDING,
  ADD_TO_CART_SUCCESS,
  UPDATE_CART_PENDING,
  UPDATE_CART_SUCCESS,
  SET_STEP_SUCCESS,
  PLACE_ORDER_SUCCESS,
} from 'utils/redux/types'

const initialState = {
  loading: false,
  errors: false,
  items: [],
  step: 1,
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
    case UPDATE_CART_PENDING:
      return { ...state, loading: true, errors: false }
    case UPDATE_CART_SUCCESS:
      return { ...state, loading: false, errors: false, items: action.items }
    case SET_STEP_SUCCESS:
      return { ...state, step: action.step }
    case PLACE_ORDER_SUCCESS:
      return { ...state, items: [], step: 1 }
    default:
      return { ...state }
  }
}

export default cartReducers
