import { createCustomAction } from "typesafe-actions"
import { User } from "../../types/users/users"

const FOLLOWED = "users/FOLLOWED"
const SET_USERS = "users/SET-USERS"
const SET_TOTAL_COUNT_USERS = "users/SET-TOTAL-COUNT-USERS"
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE"
const SET_FRIENDS = "users/SET-FRIENDS"
const FOLLOWED_FRIENDS = "users/FOLLOWED_FRIENDS"

export const setUsers = createCustomAction(SET_USERS, (users: User[]) => ({
  users,
}))
export const setFriends = createCustomAction(
  SET_FRIENDS,
  (friends: User[]) => ({
    friends,
  })
)
export const setTotalCountUsers = createCustomAction(
  SET_TOTAL_COUNT_USERS,
  (count: number) => ({
    count,
  })
)
export const setCurrentPage = createCustomAction(
  SET_CURRENT_PAGE,
  (currentPage: number) => ({
    currentPage,
  })
)
export const addFollowed = createCustomAction(
  FOLLOWED,
  (userId: number, selector: boolean) => ({
    userId,
    selector,
  })
)
export const addFollowedFriends = createCustomAction(
  FOLLOWED_FRIENDS,
  (userId: number, selector: boolean) => ({
    userId,
    selector,
  })
)
