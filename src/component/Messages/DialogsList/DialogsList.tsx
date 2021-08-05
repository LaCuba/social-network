import React from "react"
import styles from "./DialogsList.module.scss"
import optionsImg from "./../../../common/icons/options.svg"
import DialogItem from "./DialogItem/DialogItem"
import * as selectors from "../../../redux/selectors/selectors"
import { useSelector } from "react-redux"

const DialogsList = () => {
  const items = useSelector(selectors.messages.items)

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
          {items.map((el) => (
            <DialogItem
              key={el.id}
              id={el.id}
              name={el.name}
              lastMessage={el.lastMessage}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DialogsList
