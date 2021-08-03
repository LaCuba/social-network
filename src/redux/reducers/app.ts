import { Reducer } from "redux"
import { getType } from "typesafe-actions"
import actions, { ActionsType } from "../actions/actions"

type InitialState = {
  initialized: boolean
}

const initialState = {
  initialized: false,
}

const AppReducer: Reducer<InitialState, ActionsType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(actions.app.initializeSuccess):
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export default AppReducer
