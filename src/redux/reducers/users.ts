import { Reducer } from "redux"
import { getType } from "typesafe-actions"
import { usersApi } from "../../api/api"
import { User } from "../../types/users/users"
import actions, { ActionsType } from "./../actions/actions"
import { DispatchType } from "../store"

type InitialState = {
  users: User[]
  friends: User[]
  currentPage: number
  countUsersOnPage: number
  totalCountUsers: number
}

const initialState = {
  users: [],
  friends: [],
  currentPage: 1,
  countUsersOnPage: 12,
  totalCountUsers: 0,
}

const UsersReducer: Reducer<InitialState, ActionsType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(actions.users.setUsers):
      return {
        ...state,
        users: action.users,
      }
    case getType(actions.users.setFriends):
      return {
        ...state,
        friends: action.friends,
      }
    case getType(actions.users.addFollowedFriends):
      return {
        ...state,
        friends: state.friends.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: action.selector }
          }
          return u
        }),
      }
    case getType(actions.users.addFollowed):
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: action.selector }
          }
          return u
        }),
      }
    case getType(actions.users.setTotalCountUsers):
      return {
        ...state,
        totalCountUsers: action.count,
      }
    case getType(actions.users.setCurrentPage):
      return {
        ...state,
        currentPage: action.currentPage,
      }
    default:
      return state
  }
}

export const getUsers =
  (currentPage, countUsersOnPage) => async (dispatch: DispatchType) => {
    let data = await usersApi.getUsers(currentPage, countUsersOnPage)
    dispatch(actions.users.setUsers(data.items))
    dispatch(actions.users.setCurrentPage(currentPage))
    dispatch(actions.users.setTotalCountUsers(data.totalCount))
  }

export const getFriends =
  (currentPage, countUsersOnPage, friend) => async (dispatch: DispatchType) => {
    let data = await usersApi.getFriends(currentPage, countUsersOnPage, friend)
    dispatch(actions.users.setFriends(data.items))
  }

export const setFollow =
  (userId, selector) => async (dispatch: DispatchType) => {
    let response = await (selector
      ? usersApi.follow(userId)
      : usersApi.unfollow(userId))
    if (response.data.resultCode === 0) {
      dispatch(actions.users.addFollowed(userId, selector))
    }
  }

export const setFollowFriends =
  (userId, selector) => async (dispatch: DispatchType) => {
    let response = await (selector
      ? usersApi.follow(userId)
      : usersApi.unfollow(userId))
    if (response.data.resultCode === 0) {
      dispatch(actions.users.addFollowedFriends(userId, selector))
    }
  }

export default UsersReducer
