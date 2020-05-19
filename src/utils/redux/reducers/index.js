import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducers from 'utils/redux/reducers/auth'
import productsReducers from 'utils/redux/reducers/products'
import cartReducers from 'utils/redux/reducers/cart'
import orderReducers from 'utils/redux/reducers/orders'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const config = {
  key: 'root',
  storage: storage,
  stateReconciler: hardSet,
}

const rootReducer = persistCombineReducers(config, {
  authReducers,
  productsReducers,
  cartReducers,
  orderReducers,
})

export default rootReducer
