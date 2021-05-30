import React from 'react'
import styles from './Message.module.scss'
import avatarImg from './../../../../common/icons/avatar.svg'
import myAvatarImg from './../../../../common/images/user-pro-img.png'

const Message = (props) => {
  return (
    <div className={props.ownerMessage ? styles.myMessages : styles.hisMessages}>
      <div className={styles.avatar}>
        <img src={props.ownerMessage ? myAvatarImg : avatarImg} alt="" />
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