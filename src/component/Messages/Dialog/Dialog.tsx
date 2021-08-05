import React from "react"
import styles from "./Dialog.module.scss"
import MessageHeader from "./MessageHeader/MessageHeader"
import Message from "./Message/Message"
import { useSelector } from "react-redux"
import * as selectors from "./../../../redux/selectors/selectors"

const Dialog = () => {
  const messages = useSelector(selectors.messages.messages)

  return (
    <div>
      <MessageHeader />
      <div className={styles.messagesArea}>
        {messages.map((el) => (
          <Message
            key={el.id}
            ownerMessage={el.ownerMessage}
            bodyMessage={el.bodyMessage}
            messageTime={el.messageTime}
          />
        ))}
      </div>
    </div>
  )
}

export default Dialog
