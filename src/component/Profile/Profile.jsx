import React, { useEffect } from 'react'
import styles from './Profile.module.scss'
import Cover from './Cover/Cover'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import Body from './Body/Body'

const Profile = (props) => {

  if (!props.profile) {
    return <h3>Loadding....</h3>
  }

  return (
    <div className={styles.content}>
      <div className={styles.mainSectionData}>
      <Cover />
        <LeftSidebar profile={props.profile} userProfile={props.userProfile} isOwner={props.isOwner} />
        <Body profile={props.profile} userProfile={props.userProfile} />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Profile