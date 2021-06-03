import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'

const mapStateToProps = (state) => {
  return {
    usersList: state.users.users
  }
}

const UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer