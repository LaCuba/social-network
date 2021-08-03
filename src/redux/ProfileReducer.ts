import { getType } from "typesafe-actions"
import { profileApi } from "../api/api"
import actions, { ActionsType } from "./actions/actions"
import { Reducer } from "redux"
import { Post, ProfileType } from "../types/profile/profile"

type InitialState = {
  posts: Post[]
  profile: ProfileType
  profileStatus: string
  userProfile: ProfileType
}

const initialState = {
  posts: [
    {
      id: 1,
      time: "21.03.2021",
      body: "Text of post",
      likes: "222",
      views: "72",
    },
    {
      id: 2,
      time: "21.03.2021",
      body: "Text of post",
      likes: "222",
      views: "72",
    },
  ],
  profile: null,
  profileStatus: "",
  userProfile: null,
}

const ProfileReducer: Reducer<InitialState, ActionsType> = (
  state = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case getType(actions.profile.addPostCreator):
      let newPost = {
        id: 3,
        time: "16.05.2021",
        body: action.body,
        likes: "2",
        views: "5",
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    case getType(actions.profile.setProfile):
      return {
        ...state,
        profile: action.profile,
      }
    case getType(actions.profile.setUserProfile):
      return {
        ...state,
        userProfile: action.profile,
      }
    case getType(actions.profile.setStatus):
      return {
        ...state,
        profileStatus: action.status,
      }
    default:
      return state
  }
}

export const getProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileApi.getProfile(userId)
  dispatch(actions.profile.setProfile(response.data))
}

export const setProfileInfo =
  (data) => async (dispatch: any, getState: any) => {
    const response = await profileApi.setProfileInfo(data)
    if (response.data.resultCode === 0) {
      dispatch(getProfile(getState().auth.id))
    }
  }

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileApi.getProfile(userId)
  dispatch(actions.profile.setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileApi.getStatus(userId)
  dispatch(actions.profile.setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileApi.setStatus(status)
  if (response.resultCode === 0) {
    dispatch(actions.profile.setStatus(status))
  }
}

export const uploadPhoto = (file) => async (dispatch, getState) => {
  const response = await profileApi.uploadPhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(getProfile(getState().auth.id))
  }
}

export default ProfileReducer
