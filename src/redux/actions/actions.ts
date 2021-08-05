import { ActionType } from "typesafe-actions"
import * as app from "./app"
import * as auth from "./auth"
import * as messages from "./messages"
import * as profile from "./profile"
import * as users from "./users"

const actions = { app, auth, messages, profile, users }

export type ActionsType = ActionType<typeof actions>

export default actions
