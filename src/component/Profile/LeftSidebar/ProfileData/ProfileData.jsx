import React from 'react'
import styles from './ProfileData.module.scss'
import Contacts from './Contacts/Contacts'
import Avatar from './Avatar/Avatar'

const ProfileData = (props) => {
  if (!props.profile) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.userProfile}>
      <Avatar photo={props.profile.photos} isOwner={props.isOwner} uploadPhoto={props.uploadPhoto}/>
      <Contacts contacts={props.profile.contacts} />
    </div>
  )
}

export default ProfileData