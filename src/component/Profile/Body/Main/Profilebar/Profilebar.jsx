import React, { useState } from 'react'
import styles from './Profilebar.module.scss'
import posts from './../../../../../common/icons/posts.png'
import info from './../../../../../common/icons/info.png'
import PostsContainer from './Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profilebar = (props) => {

  let [disappearance, setDisappearance] = useState(true)



  return (
    <div>
      <div className={styles.profilebar}>
        <ul className={styles.items}>
          <li className={styles.posts}>
            <a onClick={() => {setDisappearance(true)}} className={styles.icon}>
              <img src={posts} alt="" />
              <div className={styles.label}>
                Posts
              </div>
            </a>
          </li>
          <li className={styles.info}>
            <a onClick={() => {setDisappearance(false)}} className={styles.icon}>
              <img src={info} alt="" />
              <div className={styles.label}>
                Info
              </div>
            </a>
          </li>
        </ul>
      </div>
      {disappearance ? <PostsContainer /> : <ProfileInfo />}
    </div>
  )
}

export default Profilebar