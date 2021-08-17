import { getType } from "typesafe-actions"
import actions, { ActionsType } from "./../actions/actions"
import { Reducer } from "redux"

type InitialState = {
  id: null | number
  email: null | string
  login: null | string
  isAuth: boolean
  error: null | string
  captcha: null | string
}

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  error: null,
  captcha: null,
}

const auth: Reducer<InitialState, ActionsType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(actions.auth.setUserData):
      return {
        ...state,
        ...action.data,
      }
    case getType(actions.auth.setError):
      return {
        ...state,
        error: action.error,
      }
    case getType(actions.auth.setCaptcha):
      return {
        ...state,
        captcha: action.captcha,
      }
    default:
      return state
  }
}

export default auth
