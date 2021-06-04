import React from 'react'
import styles from './Dialog.module.scss'
import MessageHeader from './MessageHeader/MessageHeader'
import Message from './Message/Message'

const Dialog = (props) => {

  const MessageElement = props.messages.map(el => <Message key={el.id} ownerMessage={el.ownerMessage} 
    bodyMessage={el.bodyMessage} messageTime={el.messageTime} />)

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