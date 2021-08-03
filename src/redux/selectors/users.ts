import { RootState } from "../store"

export const users = (state: RootState) => state.users.users

export const currentPage = (state: RootState) => state.users.currentPage

export const countUsersOnPage = (state: RootState) =>
  state.users.countUsersOnPage

export const totalCountUsers = (state: RootState) => state.users.totalCountUsers
