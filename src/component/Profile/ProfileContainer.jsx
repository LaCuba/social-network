import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import withAuthRerander from '../hoc/withAuthRerander'
import { getProfile, getUserProfile, getStatus, updateStatus } from './../../redux/ProfileReducer'
import Profile from './Profile'

const ProfileContainer = (props) => {

  const loadProfile = () => {
    let userId = props.match.params.userId
    if (!userId) {
      props.getProfile(props.userId)
      props.getStatus(props.userId)
    } else {
      props.getUserProfile(userId)
    }
  }

  useEffect(() => {
    loadProfile()
  }, [props.match.params.userId])

  return <Profile profile={!props.match.params.userId ? props.profile : props.userProfile}
                  isOwner={!props.match.params.userId}
                  status={props.profileStatus}
                  updateStatus={props.updateStatus} />
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    userProfile: state.profile.userProfile,
    userId: state.auth.id,
    profileStatus: state.profile.profileStatus
  }
}

export default compose(
  connect(mapStateToProps, { getProfile, getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRerander
)(ProfileContainer)