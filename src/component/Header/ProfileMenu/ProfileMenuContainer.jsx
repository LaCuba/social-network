import React from 'react'
import { connect } from 'react-redux'
import ProfileMenu from './ProfileMenu'
import { logoutAuth } from './../../../redux/AuthReducer'

const mapStatToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    profile: state.profile.profile
  }
}

export default connect(mapStatToProps, { logoutAuth })(ProfileMenu)