import { RootState } from "../store"

export const profile = (state: RootState) => state.profile.profile

export const userId = (state: RootState) => state.auth.id

export const isAuth = (state: RootState) => state.auth.isAuth
