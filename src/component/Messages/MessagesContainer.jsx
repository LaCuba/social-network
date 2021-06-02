import React from 'react'
import { connect } from 'react-redux'
import Messages from './Messages'
import { addMessageCreator } from './../../redux/MessagesReducer'

const mapStateToProps = (state) => {
  return {
    items: state.messages.items,
    messages: state.messages.messages
  }
}

const MessagesContainer = connect(mapStateToProps, {addMessageCreator})(Messages)

export default MessagesContainer