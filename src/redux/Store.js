import { createStore, combineReducers, applyMiddleware } from 'redux'
import MessagesReducer from './MessagesReducer';
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import thunkCreator from 'redux-thunk'
import AuthReducer from './AuthReducer';

const reducers = combineReducers({
  profile: ProfileReducer,
  messages: MessagesReducer,
  users: UsersReducer,
  auth: AuthReducer
})

const store = createStore(reducers, applyMiddleware(thunkCreator))

window.store = store

export default store