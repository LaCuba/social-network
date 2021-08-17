import { ThunkAction } from "redux-thunk"
import { ActionsType } from "../../redux/actions/actions"
import { RootState } from "../../redux/store"

export type ThunkType = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  ActionsType
>
