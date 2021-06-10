import { profileApi } from "../api/api"

const ADD_POST = "ADD-POST"
const SET_PROFILE = "SET-PROFILE"
const SET_USER_PROFILE = "SET-USER-PROFILE"

const initialState = {
  posts: [
    {id: 1, time: "21.03.2021", body: "Text of post", likes: "222", views: "72"},
    {id: 2, time: "21.03.2021", body: "Text of post", likes: "222", views: "72"}
  ],
  profile: null,
  userProfile: null
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        time: "16.05.2021",
        body: action.body,
        likes: "2",
        views: "5"
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.profile
      }
    default:
      return state
  }
}

export const addPostCreator = (body) => ({type: ADD_POST, body}) 
const setProfile = (profile) => ({type: SET_PROFILE, profile})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => async (dispatch) => {
  const response = await profileApi.getProfile(userId)
    dispatch(setProfile(response.data))
}

export const setProfileInfo = (data) => async (dispatch, getState) => {
  const response = await profileApi.setProfileInfo(data)
  debugger
  if (response.data.resultCode === 0) {
    dispatch(getProfile(getState().auth.id))
  }
}

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileApi.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export default ProfileReducer