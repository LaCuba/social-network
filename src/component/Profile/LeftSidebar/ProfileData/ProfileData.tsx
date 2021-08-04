import React from "react"
import styles from "./ProfileData.module.scss"
import Contacts from "./Contacts/Contacts"
import Avatar from "./Avatar/Avatar"
import { ProfileType } from "../../../../types/profile/profile"

type Props = {
  profile: ProfileType
  isOwner: boolean
}

const ProfileData = ({ profile, isOwner }: Props) => {
  if (!profile) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.userProfile}>
      <Avatar photos={profile.photos} isOwner={isOwner} />
      <Contacts contacts={profile.contacts} />
    </div>
  )
}

export default ProfileData
