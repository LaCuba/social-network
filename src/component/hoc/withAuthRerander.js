import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const withAuthRerander = (Component) => {
  const ComponentContainer = (props) => {
    if (!props.isAuth) {
      return <Redirect to='/login' />
    }
    return <Component {...props} />
  }
  
  const authRerander = connect(mapStateToProps)(ComponentContainer)
  return authRerander
}

export default withAuthRerander