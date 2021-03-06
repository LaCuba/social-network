import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": 'd9491617-917c-42d3-b131-74fff1af1ef9' }
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
  },
  getStatus(userId) {
    return(
      instance.get(`profile/status/${userId}`)
    )
  },
  setStatus(data) {
    return(
      instance.put(`profile/status`, {status: data})
        .then( response => response.data)
    )
  },
  uploadPhoto(file) {
    const formData = new FormData()
    formData.append('image', file)
    return(
      instance.put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
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
  },
  getCaptcha() {
    return(
      instance.get(`security/get-captcha-url`)
    )
  }
}