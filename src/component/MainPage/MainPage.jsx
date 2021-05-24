import React from 'react'
import styles from './MainPage.module.scss'
import Cover from '../Cover/Cover'

const MainPage = (props) => {
  return (
    <div className={styles.content}>
      <Cover />
      <div className={styles.mainSectionData}>
        <div className={styles.leftSideBar}>
          <div className={styles.userProfile}>
            User Profile
            </div>
          <div className={styles.suggetions}>
            Suggetions random users
            </div>
        </div>
        <div className={styles.mainContent}>
          Posts
          </div>
        <div className={styles.rightSideBar}>
          <div className={styles.music}>
            Music
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage