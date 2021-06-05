import React from 'react'
import styles from './LeftSidebar.module.scss'
import Contacts from './Contacts/Contacts'

const LeftSidebar = (props) => {
  return (
    <div className={styles.leftSideBar}>
      <div className={styles.userProfile}>
        <Contacts contacts={props.contacts} />
      </div>
      <div className={styles.suggetions}>
        Suggetions random users
      </div>
    </div>
  )
}

export default LeftSidebar