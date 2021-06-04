import React, { useState } from 'react'
import styles from './Messages.module.scss'
import DialogsList from './DialogsList/DialogsList'
import Dialog from './Dialog/Dialog'


const Messages = (props) => {

  const [message, setMessage] = useState('')

  const onMessageChange = (e) => {
    setMessage(e.currentTarget.value)
  }

  const addMessageCreator = () => {
    if (message !== "") {
      props.addMessageCreator(message)
      setMessage("")
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <DialogsList items={props.items} />
        <div className={styles.rightSide}>
          <Dialog messages={props.messages} />
          <div className={styles.sendArea}>
            <textarea onChange={onMessageChange} placeholder="Please write your message" value={message}></textarea>
            <button onClick={addMessageCreator}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages