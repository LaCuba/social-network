import React from "react"
import styles from "./Profile.module.scss"
import Cover from "./Cover/Cover"
import LeftSidebar from "./LeftSidebar/LeftSidebar"
import RightSidebar from "./RightSidebar/RightSidebar"
import Body from "./Body/Body"
import { ProfileType } from "../../types/profile/profile"

type Props = {
  profile: ProfileType | null
  isOwner: boolean
  status: string
}

const Profile = ({ profile, isOwner, status }: Props) => {
  if (!profile) {
    return <h3>Loadding....</h3>
  }

  return (
    <div className={styles.content}>
      <div className={styles.mainSectionData}>
        <Cover />
        <LeftSidebar profile={profile} isOwner={isOwner} />
        <Body profile={profile} isOwner={isOwner} status={status} />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Profile
