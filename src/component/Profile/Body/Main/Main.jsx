import React from 'react'
import styles from './Main.module.scss'

const Main = (props) => {
  return (
    <div className={styles.contentItems}>
      <div className={styles.profileInfo}>
        <div>Full Name</div>
        <div>Status</div>
      </div>
      <div className={styles.items}>
        <ul>
          <li>Posts</li>
          <li>Info</li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.posts}></div>
        <div className={styles.info}></div>
      </div>
    </div>
  )
}

export default Main