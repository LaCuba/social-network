import { createStore, combineReducers } from 'redux'
import MessagesReducer from './MessagesReducer';
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";

const reducers = combineReducers({
  profile: ProfileReducer,
  messages: MessagesReducer,
  users: UsersReducer
})

const store = createStore(reducers)

window.store = store

export default store