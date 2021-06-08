import React from 'react'
import styles from './LeftSidebar.module.scss'
import FriendsContainer from './Friends/FriendsContainer'
import ProfileData from './ProfileData/ProfileData'

const LeftSidebar = (props) => {
  return (
    <div className={styles.leftSideBar}>
      <ProfileData profile={props.profile} isOwner={props.isOwner} />
      <div className={styles.friends}>
        {props.isOwner && <FriendsContainer />}
      </div>
    </div>
  )
}

export default LeftSidebar