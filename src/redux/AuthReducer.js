import { loginApi } from "../api/api"

const SET_USER_DATA = "SET-USER-DATA"
const SET_ERROR = "SET-ERROR"

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  error: null
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: 
      return state
  }
}

const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA, data: {id, email, login, isAuth} 
})
const setError = (error) => ({type: SET_ERROR, error})

export const authMe = () => async (dispatch) => {
  const response = await loginApi.authMe()
  if (response.resultCode === 0) {
    let {id, email, login} = response.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const loginAuth = (data) => (dispatch) => {
  loginApi.login(data)
  .then((response) => {
    debugger
    if (response.resultCode === 0) {
      dispatch(authMe())
      dispatch(setError(null))
    } else {
      let message = response.messages.length > 0 ? response.messages[0] : "Some wrong!"
      dispatch(setError(message))
    }
  })
  .catch((error) => {
    debugger
    dispatch(setError(error.message ? error.message : 'Some error occurred'))
  })
}

export const logoutAuth = () => (dispatch) => {
  loginApi.logout()
  .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData( null, null, null, false))
    } else {
      let message = response.messages.length > 0 ? response.messages[0] : "Some wrong!"
      dispatch(setError(message))
    }
  })
  .catch((error) => {
    dispatch(setError(error.message ? error.message : 'Some error occurred'))
  })
}

export default AuthReducer