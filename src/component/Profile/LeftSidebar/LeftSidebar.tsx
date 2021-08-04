import React from "react"
import styles from "./LeftSidebar.module.scss"
import ProfileData from "./ProfileData/ProfileData"
import { ProfileType } from "../../../types/profile/profile"
import Friends from "./Friends/Friends"

type Props = {
  profile: ProfileType
  isOwner: boolean
}

const LeftSidebar = ({ profile, isOwner }: Props) => {
  return (
    <div className={styles.leftSideBar}>
      <ProfileData profile={profile} isOwner={isOwner} />
      <div className={styles.friends}>{isOwner && <Friends />}</div>
    </div>
  )
}

export default LeftSidebar
