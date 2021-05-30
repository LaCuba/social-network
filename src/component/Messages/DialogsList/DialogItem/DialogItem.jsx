import React from 'react'
import styles from './DialogItem.module.scss'
import avatarImg from './../../../../common/icons/avatar.svg'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  return (
    <li className={styles.dialogItem}>
      <NavLink to={"/messages/" + props.id} activeClassName={styles.activeLink}>
        <div className={styles.details}>
          <img src={avatarImg} alt="" />
          <div className={styles.messagesInfo}>
            <h3>{props.name}</h3>
            <p>{props.lastMessage}</p>
          </div>
        </div>
      </NavLink>
    </li>
  )
}

export default DialogItem