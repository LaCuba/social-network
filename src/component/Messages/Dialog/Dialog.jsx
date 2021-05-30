import React from 'react'
import styles from './Dialog.module.scss'
import MessageHeader from './MessageHeader/MessageHeader'
import Message from './Message/Message'

const Dialog = (props) => {

  let MessagesData = [
    {id: '1', bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: '2', bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: false},
    {id: '3', bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: '4', bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: false},
    {id: '5', bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: '6', bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: '7', bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: '8', bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: false},
  ]

  let MessageElement = MessagesData.map(el => 
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