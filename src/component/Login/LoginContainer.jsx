import { connect } from 'react-redux'
import Login from './Login'
import { loginAuth } from './../../redux/AuthReducer'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, { loginAuth })(Login)