import { loginApi } from "../api/api"

const SET_USER_DATA = "SET-USER-DATA"

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    default: 
      return state
  }
}

const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA, data: {id, email, login, isAuth} 
})

export const authMe = () => async (dispatch) => {
  const response = await loginApi.authMe()
  if (response.resultCode === 0) {
    let {id, email, login} = response.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const loginAuth = (data) => async (dispatch) => {
  const response = await loginApi.login(data)
  if (response.resultCode === 0) {
    dispatch(authMe())
  }
}

export const logoutAuth = () => async (dispatch) => {
  const response = await loginApi.logout()
  if (response.resultCode === 0) {
    dispatch(setUserData( null, null, null, false))
  }
}

export default AuthReducer