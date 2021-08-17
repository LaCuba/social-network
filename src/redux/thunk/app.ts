import { ThunkType } from "../../types/thunk/types"
import actions from "../actions/actions"
import { authMe } from "./auth"

export const initialize = (): ThunkType => async (dispatch) => {
  await dispatch(authMe())
  dispatch(actions.app.initializeSuccess())
}
