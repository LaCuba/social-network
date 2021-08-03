import { usersApi } from "../../api/api"
import actions from "../actions/actions"
import { DispatchType } from "../store"

export const getUsers =
  (currentPage: number, countUsersOnPage: number) =>
  async (dispatch: DispatchType) => {
    let data = await usersApi.getUsers(currentPage, countUsersOnPage)
    dispatch(actions.users.setUsers(data.items))
    dispatch(actions.users.setCurrentPage(currentPage))
    dispatch(actions.users.setTotalCountUsers(data.totalCount))
  }

export const getFriends =
  (currentPage: number, countUsersOnPage: number, friend: boolean) =>
  async (dispatch: DispatchType) => {
    let data = await usersApi.getFriends(currentPage, countUsersOnPage, friend)
    dispatch(actions.users.setFriends(data.items))
  }

export const setFollow =
  (userId: number, selector: boolean) => async (dispatch: DispatchType) => {
    let response = await (selector
      ? usersApi.follow(userId)
      : usersApi.unfollow(userId))
    if (response.data.resultCode === 0) {
      dispatch(actions.users.addFollowed(userId, selector))
    }
  }

export const setFollowFriends =
  (userId: number, selector: boolean) => async (dispatch: DispatchType) => {
    let response = await (selector
      ? usersApi.follow(userId)
      : usersApi.unfollow(userId))
    if (response.data.resultCode === 0) {
      dispatch(actions.users.addFollowedFriends(userId, selector))
    }
  }
