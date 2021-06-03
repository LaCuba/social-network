import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { addFollowed } from './../../redux/UsersReducer'

const mapStateToProps = (state) => {
  return {
    usersList: state.users.users
  }
}

const UsersContainer = connect(mapStateToProps, {addFollowed})(Users)

export default UsersContainer