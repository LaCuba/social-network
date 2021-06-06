import React from 'react'
import styles from './LeftSidebar.module.scss'
import Contacts from './Contacts/Contacts'
import Avatar from './Avatar/Avatar'

const LeftSidebar = (props) => {
  return (
    <div className={styles.leftSideBar}>
      <div className={styles.userProfile}>
        <Avatar photo={props.profile.photos}/>
        <Contacts contacts={props.profile.contacts} />
      </div>
      <div className={styles.suggetions}>
        Suggetions random users
      </div>
    </div>
  )
}

export default LeftSidebar