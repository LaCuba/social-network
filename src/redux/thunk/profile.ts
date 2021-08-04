import { profileApi } from "../../api/api"
import { ProfileInfo } from "../../types/profile/profile"
import actions from "../actions/actions"

export const getProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileApi.getProfile(userId)
  dispatch(actions.profile.setProfile(response.data))
}

export const setProfileInfo =
  (data: ProfileInfo) => async (dispatch: any, getState: any) => {
    const response = await profileApi.setProfileInfo(data)
    if (response.data.resultCode === 0) {
      dispatch(getProfile(getState().auth.id))
    }
  }

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileApi.getProfile(userId)
  dispatch(actions.profile.setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileApi.getStatus(userId)
  dispatch(actions.profile.setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileApi.setStatus(status)
  if (response.resultCode === 0) {
    dispatch(actions.profile.setStatus(status))
  }
}

export const uploadPhoto =
  (file: File) => async (dispatch: any, getState: any) => {
    const response = await profileApi.uploadPhoto(file)
    if (response.data.resultCode === 0) {
      dispatch(getProfile(getState().auth.id))
    }
  }
