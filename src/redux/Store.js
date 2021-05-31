import { createStore, combineReducers } from 'redux'
import ProfileReducer from "./ProfileReducer";

const reducers = combineReducers({
  profile: ProfileReducer
})

const store = createStore(reducers)

export default store