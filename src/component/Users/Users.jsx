import React from 'react'
import styles from './Users.module.scss'
import avatarImg from './../../common/icons/avatar.svg'

const Users = (props) => {
  return (
    <div className={styles.users}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Users</h3>
        </div>
      </div>
      <div className={styles.usersList}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src={avatarImg} alt="" />
          </div>
          <div className={styles.name}>
            Full Name
          </div>
          <div className={styles.follow}>
            <button>Follow</button>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
      </div>
      <div className={styles.moreUsers}>
        <button>View more</button>
      </div>
    </div>
  )
}

export default Users