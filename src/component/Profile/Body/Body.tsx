import React from "react"
import { ProfileType } from "../../../types/profile/profile"
import styles from "./Body.module.scss"
import Profilebar from "./Profilebar/Profilebar"
import ProfileData from "./ProfileData/ProfileData"

type Props = {
  profile: ProfileType
  isOwner: boolean
  status: string
}

const Body = ({ profile, isOwner, status }: Props) => {
  return (
    <div className={styles.body}>
      <ProfileData profile={profile} status={status} />
      <Profilebar isOwner={isOwner} />
    </div>
  )
}

export default Body
