import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { addFollowed, getUsers } from './../../redux/UsersReducer'

const mapStateToProps = (state) => {
  return {
    usersList: state.users.users,
    currentPage: state.users.currentPage,
    countUsersOnPage: state.users.countUsersOnPage,
    totalCountUsers: state.users.totalCountUsers
  }
}

export default connect(mapStateToProps, {addFollowed, getUsers})(Users)