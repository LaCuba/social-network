import React from "react"
import styles from "./Message.module.scss"
import avatarImg from "./../../../../common/icons/avatar.svg"
import myAvatarImg from "./../../../../common/images/user-pro-img.png"

type Props = {
  ownerMessage: boolean
  bodyMessage: string
  messageTime: string
}

const Message = ({ ownerMessage, bodyMessage, messageTime }: Props) => {
  return (
    <div className={ownerMessage ? styles.myMessages : styles.hisMessages}>
      <div className={styles.avatar}>
        <img src={ownerMessage ? myAvatarImg : avatarImg} alt="" />
      </div>
      <div className={styles.content}>
        <p>{bodyMessage}</p>
      </div>
      <div className={styles.messageTime}>
        <p>{messageTime}</p>
      </div>
    </div>
  )
}

export default Message
