import { createStore, combineReducers, applyMiddleware } from "redux"
import MessagesReducer from "./MessagesReducer"
import ProfileReducer from "./ProfileReducer"
import UsersReducer from "./UsersReducer"
import thunkCreator from "redux-thunk"
import AuthReducer from "./AuthReducer"
import AppReducer from "./AppReducer"

const rootReducer = combineReducers({
  profile: ProfileReducer,
  messages: MessagesReducer,
  users: UsersReducer,
  auth: AuthReducer,
  app: AppReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkCreator))

export type RootState = ReturnType<typeof rootReducer>

export type DispatchType = typeof store.dispatch

// @ts-ignore
window.store = store

export default store
