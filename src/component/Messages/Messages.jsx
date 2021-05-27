import React from 'react'
import styles from './Messages.module.scss'
import DialogsList from './DialogsList/DialogsList'
import avatarImg from './../../common/icons/avatar.svg'
import menuImg from './../../common/icons/menu.svg'


const Messages = (props) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <DialogsList />
        <div className={styles.rightSide}>
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
          <div className={styles.messagesLine}>
            fadadfas
          </div>
          <div className={styles.sendArea}></div>
        </div>
      </div>
    </div>
  )
}

export default Messages