import { authMe } from "./AuthReducer"

const SET_INITIALIZED = "SET-INITIALIZED"

const initialState = {
  initialized: false
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default: 
      return state
  }
}

const initializeSuccess = () => ({ type: SET_INITIALIZED })

export const initialize = () => async (dispatch) => {
  await dispatch(authMe())
  dispatch(initializeSuccess())
}

export default AppReducer