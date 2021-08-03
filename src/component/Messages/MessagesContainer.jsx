import { connect } from 'react-redux'
import Messages from './Messages'
import { compose } from 'redux'
import withAuthRerander from '../hoc/withAuthRerander'
import actions from '../../redux/actions/actions'

const mapStateToProps = (state) => {
  return {
    items: state.messages.items,
    messages: state.messages.messages
  }
}

const addMessageCreator = actions.messages.addMessageCreator

const MessagesContainer = compose(
  connect(mapStateToProps, {addMessageCreator}),
  withAuthRerander
)(Messages)

export default MessagesContainer