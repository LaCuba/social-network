import React from 'react'
import styles from './Messages.module.scss'
import DialogsList from './DialogsList/DialogsList'
import avatarImg from './../../common/icons/avatar.svg'
import menuImg from './../../common/icons/menu.svg'
import Dialog from './Dialog/Dialog'


const Messages = (props) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <DialogsList />
        <div className={styles.rightSide}>
          <Dialog />
          <div className={styles.sendArea}>
            <textarea placeholder="Please write your message" className={styles.addMessage}></textarea>
            <button onClick={() => {}}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages