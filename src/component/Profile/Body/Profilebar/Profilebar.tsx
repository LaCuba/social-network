import React, { useState } from "react"
import styles from "./Profilebar.module.scss"
import posts from "./../../../../common/icons/posts.png"
import info from "./../../../../common/icons/info.png"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Posts from "./Posts/Posts"

type Props = {
  isOwner: boolean
}

const Profilebar = ({ isOwner }: Props) => {
  const [disappearance, setDisappearance] = useState(true)

  return (
    <div>
      <div className={styles.profilebar}>
        <ul className={styles.items}>
          {isOwner && (
            <li className={styles.posts}>
              <a
                onClick={() => {
                  setDisappearance(true)
                }}
                className={styles.icon}
              >
                <img src={posts} alt="" />
                <div className={styles.label}>Posts</div>
              </a>
            </li>
          )}
          <li className={styles.info}>
            <a onClick={() => setDisappearance(false)} className={styles.icon}>
              <img src={info} alt="" />
              <div className={styles.label}>Info</div>
            </a>
          </li>
        </ul>
      </div>
      {disappearance ? isOwner && <Posts /> : <ProfileInfo />}
    </div>
  )
}

export default Profilebar
