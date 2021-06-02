import { createStore, combineReducers } from 'redux'
import MessagesReducer from './MessagesReducer';
import ProfileReducer from "./ProfileReducer";

const reducers = combineReducers({
  profile: ProfileReducer,
  messages: MessagesReducer
})

const store = createStore(reducers)

export default store