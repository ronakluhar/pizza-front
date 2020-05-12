import axios from 'axios'
import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from 'utils/redux/types'

export const loginUser = (credentials, history) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_PENDING })

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, credentials)
      .then((res) => {
        localStorage.setItem('loggedIn', true)
        localStorage.setItem('token', res.data.data.api_token)
        history('../', { replace: true })
        dispatch({ type: LOGIN_SUCCESS, user: res.data.data.user })
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: LOGIN_FAILURE })
      })
  }
}
