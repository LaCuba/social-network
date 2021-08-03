import { createCustomAction } from "typesafe-actions"
import { ProfileType } from "../../types/profile/profile"

const ADD_POST = "profile/ADD-POST"
const SET_PROFILE = "profile/SET-PROFILE"
const SET_USER_PROFILE = "profile/SET-USER-PROFILE"
const SET_STATUS = "profile/SET-STATUS"

export const addPostCreator = createCustomAction(ADD_POST, (body: string) => ({
  body,
}))

export const setProfile = createCustomAction(
  SET_PROFILE,
  (profile: ProfileType) => ({ profile })
)
export const setUserProfile = createCustomAction(
  SET_USER_PROFILE,
  (profile: ProfileType) => ({ profile })
)
export const setStatus = createCustomAction(SET_STATUS, (status: string) => ({
  status,
}))
