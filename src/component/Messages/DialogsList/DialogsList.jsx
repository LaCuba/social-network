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
          <DialogItem url="/messages/1" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/2" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/3" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/4" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/5" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/6" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/7" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/8" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/9" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/10" name="Full Name" lastMessage="Text of last message" />
          <DialogItem url="/messages/11" name="Full Name" lastMessage="Text of last message" />
        </ul>
      </div>
    </div>
  )
}

export default DialogsList