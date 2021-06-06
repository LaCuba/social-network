import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { getProfile } from './../../redux/ProfileReducer'
import Profile from './Profile'

const ProfileContainer = (props) => {

  const loadProfile = () => {
    let userId = props.match.params.userId
    if (!userId) {
      props.getProfile(props.userId)
    }
    props.getProfile(userId)
  }

  useEffect(() => {
    loadProfile()
  }, [props.match.params.userId])

  return <Profile profile={props.profile}
                  getProfile={props.getProfile} />
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    userId: state.profile.userId
  }
}

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
)(ProfileContainer)