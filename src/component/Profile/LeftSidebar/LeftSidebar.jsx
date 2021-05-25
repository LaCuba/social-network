import React from 'react'
import styles from './LeftSidebar.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const LeftSidebar = (props) => {
  return (
    <div className={styles.leftSideBar}>
      <div className={styles.userProfile}>
        <ProfileInfo />
        User Profile
      </div>
      <div className={styles.suggetions}>
        Suggetions random users
      </div>
    </div>
  )
}

export default LeftSidebar