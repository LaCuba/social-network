import React from 'react'
import { connect } from 'react-redux'
import { getFriends } from './../../../../redux/UsersReducer'
import Friends from './Friends'

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage,
    countUsersOnPage: state.users.countUsersOnPage,
  }
}

  export default connect(mapStateToProps, {getFriends})(Friends)