import actions from "../actions/actions"
import { authMe } from "./auth"

export const initialize = () => async (dispatch: any) => {
  await dispatch(authMe())
  dispatch(actions.app.initializeSuccess())
}
