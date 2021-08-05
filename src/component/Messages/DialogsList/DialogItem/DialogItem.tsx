import React from "react"
import styles from "./DialogItem.module.scss"
import avatarImg from "./../../../../common/icons/avatar.svg"
import { NavLink } from "react-router-dom"

type Props = {
  id: number
  name: string
  lastMessage: string
}

const DialogItem = ({ id, name, lastMessage }: Props) => {
  return (
    <li className={styles.dialogItem}>
      <NavLink to={"/messages/" + id} activeClassName={styles.activeLink}>
        <div className={styles.details}>
          <img src={avatarImg} alt="" />
          <div className={styles.messagesInfo}>
            <h3>{name}</h3>
            <p>{lastMessage}</p>
          </div>
        </div>
      </NavLink>
    </li>
  )
}

export default DialogItem
