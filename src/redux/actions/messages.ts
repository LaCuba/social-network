import { createCustomAction } from "typesafe-actions"

const ADD_MESSAGE = "messages/ADD-MESSAGE"

export const addMessageCreator = createCustomAction(
  ADD_MESSAGE,
  (body: string) => ({ body })
)
