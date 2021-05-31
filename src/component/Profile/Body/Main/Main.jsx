import React from 'react'
import styles from './Main.module.scss'
import PostsContainer from './Posts/PostsContainer'
import Profilebar from './Profilebar/Profilebar'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Main = (props) => {
  return (
    <div className={styles.contentItems}>
      <ProfileInfo />
      <Profilebar />
      <div className={styles.content}>
        <PostsContainer />
        <div className={styles.posts}></div>
        <div className={styles.info}></div>
      </div>
    </div>
  )
}

export default Main