import axios from "axios";
import { follow } from "../redux/UsersReducer";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": '4b2c937e-f821-4193-9da2-3c9c993b0e86' }
})

export const usersApi = {
  getUsers(currentPage, countUsersOnPage) {
    return( 
      instance.get(`users?page=${currentPage}&count=${countUsersOnPage}`)
        .then(response => response.data)
    )
  },
  getFriends(currentPage, countUsersOnPage, friend) {
    return( 
      instance.get(`users?page=${currentPage}&count=${countUsersOnPage}&friend=${friend}`)
        .then(response => response.data)
    )
  },
  follow(userId) {
    return (
      instance.post(`follow/${userId}`)
    )
  },
  unfollow(userId) {
    return (
      instance.delete(`follow/${userId}`)
    )
  }
}

export const profileApi = {
  getProfile(userId) {
    return(
      instance.get(`profile/${userId}`)
    )
  },
  setProfileInfo(data) {
    return(
      instance.put('profile', data)
    )
  }
}

export const loginApi = {
  authMe(data) {
    return(
      instance.get(`auth/me`)
        .then(response => response.data)
    )
  },
  login(data) {
    return(
      instance.post(`auth/login`, data)
        .then(response => response.data)
    )
  },
  logout() {
    return(
      instance.delete(`auth/login`)
    )
  }
}