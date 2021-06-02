import React from 'react'
import styles from './Dialog.module.scss'
import MessageHeader from './MessageHeader/MessageHeader'
import Message from './Message/Message'

const Dialog = (props) => {

  let MessageElement = props.messages.map(el => 
    <Message ownerMessage={el.ownerMessage} bodyMessage={el.bodyMessage} messageTime={el.messageTime} />)

  return (
  <div>
    <MessageHeader />
    <div className={styles.messagesArea}>
    { MessageElement }
    </div>
  </div>
  )
}

export default Dialog