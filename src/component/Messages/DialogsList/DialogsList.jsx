import React from 'react'
import styles from './DialogsList.module.scss'
import optionsImg from './../../../common/icons/options.svg'
import DialogItem from './DialogItem/DialogItem'

const DialogsList = (props) => {

  let items = [
    { id: 2, name: "Michael Barskiy", lastMessage: "Text of last message"},
    { id: 3, name: "Full Name", lastMessage: "Text of last message"},
    { id: 4, name: "Nicholas Barskiy", lastMessage: "Text of last message"},
    { id: 5, name: "Andrew Barskiy", lastMessage: "Text of last message"},
    { id: 6, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 7, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 8, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 9, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 10, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 11, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 12, name: "Michael Anzorev", lastMessage: "Text of last message"}
  ]

  let dialogItem = items.map(el => <DialogItem id={el.id} 
    name={el.name} lastMessage={el.lastMessage} />)

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
          { dialogItem }
        </ul>
      </div>
    </div>
  )
}

export default DialogsList