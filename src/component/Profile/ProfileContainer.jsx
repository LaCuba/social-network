import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProfile } from './../../redux/ProfileReducer'
import Profile from './Profile'

const ProfileContainer = (props) => {

  useEffect(() => {
    props.getProfile(props.userId)
  }, [props.userId])

  return <Profile profile={props.profile}
                  getProfile={props.getProfile} />
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    userId: state.profile.userId
  }
}


export default connect(mapStateToProps, { getProfile })(ProfileContainer)