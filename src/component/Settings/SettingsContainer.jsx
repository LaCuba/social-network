import React from 'react'
import { connect } from 'react-redux'
import { getProfile, setProfileInfo } from '../../redux/ProfileReducer'
import Settings from './Settings'


const SettingsContainer = (props) => {

  if (!props.profile) {
    props.getProfile(props.userId)
    return <div>Loadding...</div>
  }

  return <Settings profile={props.profile} setProfileInfo={props.setProfileInfo} />
}


const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    userId: state.auth.id
  }
}

export default connect(mapStateToProps, { getProfile, setProfileInfo })(SettingsContainer)