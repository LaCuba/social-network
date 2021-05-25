import React from 'react'
import styles from './Profilebar.module.scss'
import posts from './../../../../../common/icons/posts.png'
import info from './../../../../../common/icons/info.png'

const Profilebar = (props) => {
  return (
    <div className={styles.profilebar}>
      <ul className={styles.items}>
        <li className={styles.posts}>
          <a href="#" className={styles.icon}>
            <img src={posts} alt="" />
            <div className={styles.label}>
              Posts
            </div>
          </a>
        </li>
        <li className={styles.info}>
          <a href="#" className={styles.icon}>
            <img src={info} alt="" />
            <div className={styles.label}>
              Info
            </div>
          </a>
        </li>
        <li>
          <div className={styles.info}></div>
        </li>
      </ul>
    </div>
  )
}

export default Profilebar