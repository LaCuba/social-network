import React from 'react'
import styles from './MainPage.module.scss'
import Cover from './Cover/Cover'
import LeftSidebar from './LeftSidebar/LeftSidebar'

const MainPage = (props) => {
  return (
    <div className={styles.content}>
      <Cover />
      <div className={styles.mainSectionData}>
        <LeftSidebar />
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