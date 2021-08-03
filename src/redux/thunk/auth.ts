import { loginApi } from "../../api/api"
import actions from "../actions/actions"
import { DispatchType } from "../store"

export const authMe = () => async (dispatch: DispatchType) => {
  const response = await loginApi.authMe()
  if (response.resultCode === 0) {
    let { id, email, login } = response.data
    dispatch(actions.auth.setUserData(id, email, login, true))
  }
}

type LoginAuthType = {
  email: string
  password: string
  rememberMe: boolean
}

export const loginAuth =
  ({ email, password, rememberMe }: LoginAuthType) =>
  (dispatch: any) => {
    loginApi
      .login({ email, password, rememberMe })
      .then((response) => {
        if (response.resultCode === 0) {
          dispatch(authMe())
          dispatch(actions.auth.setError(null))
        } else {
          if (response.resultCode === 10) {
            dispatch(getCaptcha())
          }
          let message =
            response.messages.length > 0 ? response.messages[0] : "Some wrong!"
          dispatch(actions.auth.setError(message))
        }
      })
      .catch((error) => {
        dispatch(
          actions.auth.setError(
            error.message ? error.message : "Some error occurred"
          )
        )
      })
  }

export const getCaptcha = () => (dispatch: DispatchType) => {
  loginApi.getCaptcha().then((response) => {
    dispatch(actions.auth.setCaptcha(response.data.url))
  })
}

export const logoutAuth = () => (dispatch: DispatchType) => {
  loginApi
    .logout()
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(actions.auth.setUserData(null, null, null, false))
        dispatch(actions.auth.setCaptcha(null))
      } else {
        let message =
          response.messages.length > 0 ? response.messages[0] : "Some wrong!"
        dispatch(actions.auth.setError(message))
      }
    })
    .catch((error) => {
      dispatch(
        actions.auth.setError(
          error.message ? error.message : "Some error occurred"
        )
      )
    })
}
