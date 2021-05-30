import React from 'react'
import styles from './Message.module.scss'
import avatarImg from './../../../../common/icons/avatar.svg'

const Message = (props) => {
  return (
    <div className={props.ownerMessage ? styles.myMessage : styles.hisMessage}>
      <div className={styles.avatar}>
        <img src={avatarImg} alt="" />
      </div>
      <div className={styles.content}>
        <p>{props.bodyMessage}</p>
      </div>
      <div className={styles.messageTime}>
        <p>{props.messageTime}</p>
      </div>
    </div>
  )
}

export default Message