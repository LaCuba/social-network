import { DispatchType } from "./Store"
import { getType } from "typesafe-actions"
import actions, { ActionsType } from "./actions/actions"
import { authMe } from "./AuthReducer"

const initialState = {
  initialized: false,
}

type StateType = typeof initialState

const AppReducer = (state = initialState, action: ActionsType): StateType => {
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
