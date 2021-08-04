import React, { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "redux"
import withAuthRerander from "../hoc/withAuthRerander"
import {
  getProfile,
  getUserProfile,
  getStatus,
} from "../../redux/thunk/profile"
import Profile from "./Profile"
import * as selectors from "../../redux/selectors/selectors"
import { RouteComponentProps } from "react-router-dom"

type PathParamsType = {
  userId: any
}

const ProfileContainer = (props: RouteComponentProps<PathParamsType>) => {
  const dispatch = useDispatch()

  const profile = useSelector(selectors.profile.profile)
  const userProfile = useSelector(selectors.profile.userProfile)
  const userId = useSelector(selectors.profile.userId)
  const profileStatus = useSelector(selectors.profile.profileStatus)

  const loadProfile = () => {
    let userIdFromParams = props.match.params.userId
    if (!userIdFromParams && userId) {
      dispatch(getProfile(userId))
      dispatch(getStatus(userId))
    } else {
      dispatch(getUserProfile(userIdFromParams))
    }
  }

  useEffect(() => {
    loadProfile()
  }, [props.match.params.userId])

  return (
    <>
      {profile && (
        <Profile
          profile={!props.match.params.userId ? profile : userProfile}
          isOwner={!props.match.params.userId}
          status={profileStatus}
        />
      )}
    </>
  )
}

export default compose(withRouter, withAuthRerander)(ProfileContainer) as FC
