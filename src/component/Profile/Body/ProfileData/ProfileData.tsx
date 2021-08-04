import React from "react"
import { ProfileType } from "../../../../types/profile/profile"
import styles from "./ProfileData.module.scss"
import ProfileStatus from "./ProfileStatus/ProfileStatus"

type Props = {
  profile: ProfileType
  status: string
}

const ProfileData = ({ profile, status }: Props) => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.name}>{profile.fullName}</div>
      <ProfileStatus propsStatus={status} />
    </div>
  )
}

export default ProfileData
