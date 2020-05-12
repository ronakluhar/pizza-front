import React from 'react'
import AppRouter from 'utils/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'utils/redux/store'
import 'styles/main.scss'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
)

export default App
