import React from 'react'
import styles from './LeftSidebar.module.scss'
import UserProfile from './UserProfile/UserProfile'

const LeftSidebar = (props) => {
  return (
    <div className={styles.leftSideBar}>
      <div className={styles.userProfile}>
        <UserProfile />
        User Profile
      </div>
      <div className={styles.suggetions}>
        Suggetions random users
      </div>
    </div>
  )
}

export default LeftSidebar