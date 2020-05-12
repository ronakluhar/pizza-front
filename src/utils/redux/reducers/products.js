import {
  PRODUCTS_FETCH_PENDING,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAILURE,
} from 'utils/redux/types'

const initialState = {
  loading: false,
  errors: false,
  products: null,
}

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_PENDING:
      return { ...state, loading: true, errors: false, products: null }
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
        products: action.products,
      }
    case PRODUCTS_FETCH_FAILURE:
      return { ...state, loading: false, errors: true, products: null }
    default:
      return { ...state }
  }
}

export default productsReducers
