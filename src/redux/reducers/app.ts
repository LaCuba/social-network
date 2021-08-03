import { Reducer } from "redux"
import { getType } from "typesafe-actions"
import actions, { ActionsType } from "../actions/actions"
import { authMe } from "./auth"

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

export const initialize = () => async (dispatch: any) => {
  await dispatch(authMe())
  dispatch(actions.app.initializeSuccess())
}

export default AppReducer
