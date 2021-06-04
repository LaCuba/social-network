import axios from "axios";

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
  }
}