import { createCustomAction } from "typesafe-actions"

const SET_USER_DATA = "auth/SET-USER-DATA"
const SET_ERROR = "auth/SET-ERROR"
const SET_CAPTCHA = "auth/SET-CAPTCHA"

export const setUserData = createCustomAction(
  SET_USER_DATA,
  (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) => ({
    data: { id, email, login, isAuth },
  })
)

export const setError = createCustomAction(
  SET_ERROR,
  (error: string | null) => ({
    error,
  })
)
export const setCaptcha = createCustomAction(
  SET_CAPTCHA,
  (captcha: string | null) => ({ captcha })
)
