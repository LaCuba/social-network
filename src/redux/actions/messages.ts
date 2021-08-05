import { createCustomAction } from "typesafe-actions"

const ADD_MESSAGE = "messages/ADD-MESSAGE"

export const addMessage = createCustomAction(ADD_MESSAGE, (body: string) => ({
  body,
}))
