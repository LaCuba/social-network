import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkCreator from "redux-thunk"
import reducers from "./reducers/reducers"

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer, applyMiddleware(thunkCreator))

export type RootState = ReturnType<typeof rootReducer>

export type DispatchType = typeof store.dispatch

// @ts-ignore
window.store = store

export default store
