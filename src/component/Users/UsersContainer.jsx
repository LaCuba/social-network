import { connect } from 'react-redux'
import Users from './Users'
import { setFollow, getUsers } from './../../redux/UsersReducer'
import { compose } from 'redux'
import withAuthRerander from '../hoc/withAuthRerander'

const mapStateToProps = (state) => {
  return {
    usersList: state.users.users,
    currentPage: state.users.currentPage,
    countUsersOnPage: state.users.countUsersOnPage,
    totalCountUsers: state.users.totalCountUsers
  }
}

export default compose(
  connect(mapStateToProps, {setFollow, getUsers}),
  withAuthRerander
)(Users)