import React, { useState } from "react"
import styles from "./Messages.module.scss"
import DialogsList from "./DialogsList/DialogsList"
import Dialog from "./Dialog/Dialog"
import withAuthRerander from "../hoc/withAuthRerander"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../../redux/actions/messages"

const Messages = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("")

  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
  }

  const addMessageCreator = () => {
    if (message !== "") {
      dispatch(addMessage(message))
      setMessage("")
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <DialogsList />
        <div className={styles.rightSide}>
          <Dialog />
          <div className={styles.sendArea}>
            <textarea
              onChange={onMessageChange}
              placeholder="Please write your message"
              value={message}
            ></textarea>
            <button onClick={addMessageCreator}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuthRerander(Messages)
