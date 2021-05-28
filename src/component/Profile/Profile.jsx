import React from 'react'
import styles from './Profile.module.scss'
import Cover from './Cover/Cover'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import Body from './Body/Body'

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.mainSectionData}>
      <Cover />
        <LeftSidebar />
        <Body />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Profile