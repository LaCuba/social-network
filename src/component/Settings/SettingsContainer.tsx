import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "./../../redux/thunk/profile"
import Settings from "./Settings"
import * as selectors from "./../../redux/selectors/selectors"

const SettingsContainer = () => {
  const dispatch = useDispatch()

  const profile = useSelector(selectors.settings.profile)
  const userId = useSelector(selectors.settings.userId)

  if (!profile && userId !== null) {
    dispatch(getProfile(userId))
    return <div>Loadding...</div>
  } else if (!profile && !userId) {
    console.log("Error: have not profile and user's id")
    return <div>Error</div>
  }
  return <Settings />
}

export default SettingsContainer
