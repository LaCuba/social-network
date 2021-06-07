import React from 'react'
import { connect } from 'react-redux'
import { getFriends } from './../../../../redux/UsersReducer'
import { setFollowFriends } from './../../../../redux/UsersReducer'
import Friends from './Friends'

const mapStateToProps = (state) => {
  return {
    friends: state.users.friends,
  }
}

  export default connect(mapStateToProps, {getFriends, setFollowFriends})(Friends)