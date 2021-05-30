import React from 'react'
import styles from './DialogsList.module.scss'
import optionsImg from './../../../common/icons/options.svg'
import DialogItem from './DialogItem/DialogItem'

const DialogsList = (props) => {
  return (
    <div className={styles.dialogsList}>
      <div className={styles.title}>
        <h3>Messages</h3>
        <a href="#">
          <img src={optionsImg} alt="" />
        </a>
      </div>
      <div className={styles.messagesList}>
        <ul>
          <DialogItem id="1" name="Full Name" lastMessage="Text of last message" />
          <DialogItem id="2" name="Maksim jkfnaskjfasfasdfasdfasdfdfasdf" lastMessage="Textsadfasdfsfdsfasfasfasfasfasfasfa of last message" />
          <DialogItem id="3" name="Full Name" lastMessage="Text of last message" />
          <DialogItem id="4" name="Full Name" lastMessage="Text of last message" />
          <DialogItem id="5" name="Full Name" lastMessage="Text of last message" />
          <DialogItem id="6" name="Full Name" lastMessage="Text of last message" />
          <DialogItem id="7" name="Full Name" lastMessage="Text of last message" />
          <DialogItem id="8" name="Full Name" lastMessage="Text of last message" />
          <DialogItem id="9" name="Full Name" lastMessage="Text of last message" />
          <DialogItem id="10" name="Full Name" lastMessage="Text of last message" />
          <DialogItem id="11" name="Full Name" lastMessage="Text of last message" />
        </ul>
      </div>
    </div>
  )
}

export default DialogsList