import { RootState } from "../store"

export const profile = (state: RootState) => state.profile.profile

export const userProfile = (state: RootState) => state.profile.userProfile

export const userId = (state: RootState) => state.auth.id

export const profileStatus = (state: RootState) => state.profile.profileStatus

export const friends = (state: RootState) => state.users.friends

export const posts = (state: RootState) => state.profile.posts
