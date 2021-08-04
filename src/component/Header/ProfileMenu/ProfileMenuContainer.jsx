import { connect } from "react-redux"
import ProfileMenu from "./ProfileMenu"
import { logoutAuth } from "./../../../redux/thunk/auth"

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    profile: state.profile.profile,
  }
}

export default connect(mapStateToProps, { logoutAuth })(ProfileMenu)
