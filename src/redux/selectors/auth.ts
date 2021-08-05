import { RootState } from "../store"

export const captcha = (state: RootState) => state.auth.captcha

export const isAuth = (state: RootState) => state.auth.isAuth

export const error = (state: RootState) => state.auth.error
