import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducers from 'utils/redux/reducers/auth'
import productsReducers from 'utils/redux/reducers/products'
import cartReducers from 'utils/redux/reducers/cart'

const config = {
  key: 'root',
  storage: storage,
}

const rootReducer = persistCombineReducers(config, {
  authReducers,
  productsReducers,
  cartReducers,
})

export default rootReducer
