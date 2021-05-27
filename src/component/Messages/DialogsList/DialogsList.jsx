import React from 'react'
import styles from './DialogsList.module.scss'
import optionsImg from './../../../common/icons/options.svg'
import avatarImg from './../../../common/icons/avatar.svg'

const DialogsList = (props) => {
  return (
    <div className={styles.leftSide}>
      <div className={styles.title}>
        <h3>Messages</h3>
        <a href="#">
          <img src={optionsImg} alt="" />
        </a>
      </div>
      <div className={styles.messagesList}>
        <ul>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.details}>
                <img src={avatarImg} alt="" />
                <div className={styles.messagesInfo}>
                  <h3>Full Name</h3>
                  <p>Text of last message</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DialogsList