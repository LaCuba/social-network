import { usersApi } from "../api/api"

const FOLLOWED = "FOLLOWED"
const SET_USERS = "SET-USERS"
const SET_TOTAL_COUNT_USERS = "SET-TOTAL-COUNT-USERS"

const initialState = {
  users: [],
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
    default: 
      return state
  }
}
const setUsers = (users) => ({type: SET_USERS, users })
const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count })
export const addFollowed = (userId, selector) => ({type: FOLLOWED, userId, selector})

export const getUsers = (currentPage, countUsersOnPage) => async (dispatch) => {
  let data = await usersApi.getUsers(currentPage, countUsersOnPage)
  dispatch(setUsers(data.items))
  dispatch(setTotalCountUsers(data.totalCount))
}

export default UsersReducer
