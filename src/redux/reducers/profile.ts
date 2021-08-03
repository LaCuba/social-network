import { getType } from "typesafe-actions"
import actions, { ActionsType } from "./../actions/actions"
import { Reducer } from "redux"
import { Post, ProfileType } from "../../types/profile/profile"

type InitialState = {
  posts: Post[]
  profile: ProfileType | null
  profileStatus: string
  userProfile: ProfileType | null
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

export default ProfileReducer
