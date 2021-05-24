import React from 'react'
import styles from './ProfilePage.module.scss'
import Cover from './Cover/Cover'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import MainContent from './MainContent/MainContent'
import RightSidebar from './RightSidebar/RightSidebar'

const MainPage = (props) => {
  return (
    <div className={styles.content}>
      <Cover />
      <div className={styles.mainSectionData}>
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  )
}

export default MainPage