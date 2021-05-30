import React from 'react'
import styles from './MessageHeader.module.scss'
import avatarImg from './../../../../common/icons/avatar.svg'
import menuImg from './../../../../common/icons/menu.svg'

const MessageHeader = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.details}>
        <div className={styles.userInfo}>
          <a href="#">
            <img src={avatarImg} alt="" />
            <div className={styles.info}>
              <h3>Full Name</h3>
              <p>online</p>
            </div>
          </a>
        </div>
        <div className={styles.menu}>
          <a href="#">
            <img src={menuImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MessageHeader