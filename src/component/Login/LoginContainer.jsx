import { connect } from "react-redux"
import Login from "./Login"
import { loginAuth, getCaptcha } from "./../../redux/thunk/auth"

const mapStateToProps = (state) => {
  return {
    captcha: state.auth.captcha,
    isAuth: state.auth.isAuth,
    error: state.auth.error,
  }
}

export default connect(mapStateToProps, { loginAuth, getCaptcha })(Login)
