import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import withAuthRerander from '../hoc/withAuthRerander'
import { getProfile, getUserProfile } from './../../redux/ProfileReducer'
import Profile from './Profile'

const ProfileContainer = (props) => {

  const loadProfile = () => {
    let userId = props.match.params.userId
    if (!userId) {
      props.getProfile(props.userId)
    }
    props.getUserProfile(userId)
  }

  useEffect(() => {
    loadProfile()
  }, [props.match.params.userId])

  return <Profile profile={props.profile}
                  userProfile={props.userProfile}
                  isOwner={!props.match.params.userId} />
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    userId: state.auth.id
  }
}

export default compose(
  connect(mapStateToProps, { getProfile, getUserProfile }),
  withRouter,
  withAuthRerander
)(ProfileContainer)