import { createCustomAction } from "typesafe-actions"

const SET_INITIALIZED = "SET-INITIALIZED"


export const initializeSuccess = createCustomAction(SET_INITIALIZED)
