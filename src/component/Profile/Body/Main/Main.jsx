import React from 'react'
import styles from './Main.module.scss'
import PostsContainer from './Posts/PostsContainer'
import Profilebar from './Profilebar/Profilebar'
import ProfileData from './ProfileData/ProfileData'

const Main = (props) => {
  return (
    <div className={styles.contentItems}>
      <ProfileData />
      <Profilebar />
      <div className={styles.content}>
        <PostsContainer />
        <div className={styles.info}></div>
      </div>
    </div>
  )
}

export default Main