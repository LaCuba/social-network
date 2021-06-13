import { connect } from 'react-redux'
import Messages from './Messages'
import { addMessageCreator } from './../../redux/MessagesReducer'
import { compose } from 'redux'
import withAuthRerander from '../hoc/withAuthRerander'

const mapStateToProps = (state) => {
  return {
    items: state.messages.items,
    messages: state.messages.messages
  }
}

const MessagesContainer = compose(
  connect(mapStateToProps, {addMessageCreator}),
  withAuthRerander
)(Messages)

export default MessagesContainer