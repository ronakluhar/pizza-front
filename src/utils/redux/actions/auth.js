import axios from 'axios'
import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from 'utils/redux/types'
import { setStep } from './cart'

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_PENDING })

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, credentials)
      .then((res) => {
        localStorage.setItem('loggedIn', true)
        localStorage.setItem('token', res.data.data.api_token)
        dispatch(setStep(2))
        dispatch({ type: LOGIN_SUCCESS, user: res.data.data.user })
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: LOGIN_FAILURE })
      })
  }
}
