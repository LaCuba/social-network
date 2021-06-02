import React from 'react'
import styles from './DialogsList.module.scss'
import optionsImg from './../../../common/icons/options.svg'
import DialogItem from './DialogItem/DialogItem'

const DialogsList = (props) => {

  let dialogItem = props.items.map(el => <DialogItem id={el.id} 
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