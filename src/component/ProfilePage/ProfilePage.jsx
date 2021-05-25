import React from 'react'
import styles from './ProfilePage.module.scss'
import Cover from './Cover/Cover'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import Body from './Body/Body'

const MainPage = (props) => {
  return (
    <div className={styles.content}>
      <Cover />
      <div className={styles.mainSectionData}>
        <LeftSidebar />
        <Body />
        <RightSidebar />
      </div>
    </div>
  )
}

export default MainPage