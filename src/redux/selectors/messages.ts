import { RootState } from "../store"

export const items = (state: RootState) => state.messages.items

export const messages = (state: RootState) => state.messages.messages
