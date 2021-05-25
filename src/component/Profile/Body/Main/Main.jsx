import React from 'react'
import styles from './Main.module.scss'
import Posts from './Posts/Posts'
import Profilebar from './Profilebar/Profilebar'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Main = (props) => {
  return (
    <div className={styles.contentItems}>
      <ProfileInfo />
      <Profilebar />
      <div className={styles.content}>
        <Posts />
        <div className={styles.posts}></div>
        <div className={styles.info}></div>
      </div>
    </div>
  )
}

export default Main