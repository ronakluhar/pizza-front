import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from 'utils/redux/types'

const initialState = {
  loading: false,
  errors: false,
  user: null,
  loggedIn: false,
}

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        errors: false,
        user: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
        user: action.user,
        loggedIn: true,
      }
    case LOGIN_FAILURE:
      return { ...state, loading: false, errors: true, user: null }
    default:
      return { ...state }
  }
}

export default authReducers
