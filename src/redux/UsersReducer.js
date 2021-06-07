import { usersApi } from "../api/api"

const FOLLOWED = "FOLLOWED"
const SET_USERS = "SET-USERS"
const SET_TOTAL_COUNT_USERS = "SET-TOTAL-COUNT-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_FRIENDS = "SET-FRIENDS"
const FOLLOWED_FRIENDS = "FOLLOWED_FRIENDS"

const initialState = {
  users: [],
  friends: [],
  currentPage: 1,
  countUsersOnPage: 12,
  totalCountUsers: 0
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users:  action.users
      }
    case SET_FRIENDS:
      return {
        ...state,
        friends:  action.friends
      }
    case FOLLOWED_FRIENDS:
      return {
        ...state,
        friends: state.friends.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: action.selector}
          }
          return u
        })
      }
    case FOLLOWED:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: action.selector}
          }
          return u
        })
      }
    case SET_TOTAL_COUNT_USERS:
      return {
        ...state, 
        totalCountUsers: action.count
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, 
        currentPage: action.currentPage
      }
    default: 
      return state
  }
}
const setUsers = (users) => ({type: SET_USERS, users })
const setFriends = (friends) => ({type: SET_FRIENDS, friends })
const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count })
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
const addFollowed = (userId, selector) => ({type: FOLLOWED, userId, selector})
const addFollowedFriends = (userId, selector) => ({type: FOLLOWED_FRIENDS, userId, selector})

export const getUsers = (currentPage, countUsersOnPage) => async (dispatch) => {
  let data = await usersApi.getUsers(currentPage, countUsersOnPage)
  dispatch(setUsers(data.items))
  dispatch(setCurrentPage(currentPage))
  dispatch(setTotalCountUsers(data.totalCount))
}

export const getFriends = (currentPage, countUsersOnPage, friend) => async (dispatch) => {
  let data = await usersApi.getFriends(currentPage, countUsersOnPage, friend)
  dispatch(setFriends(data.items))
}

export const setFollow = (userId, selector) => async (dispatch) => {
  let response = await (selector ? usersApi.follow(userId) : usersApi.unfollow(userId))
  if (response.data.resultCode === 0) {
    dispatch(addFollowed(userId, selector))
  }
}

export const setFollowFriends = (userId, selector) => async (dispatch) => {
  let response = await (selector ? usersApi.follow(userId) : usersApi.unfollow(userId))
  if (response.data.resultCode === 0) {
    dispatch(addFollowedFriends(userId, selector))
  }
}

export default UsersReducer
