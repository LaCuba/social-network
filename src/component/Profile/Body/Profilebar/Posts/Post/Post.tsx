import React from "react"
import styles from "./Post.module.scss"
import userImage from "./../../../../../../common/images/user-pro-img.png"
import clockImg from "./../../../../../../common/icons/clock.png"
import likeImg from "./../../../../../../common/icons/like.svg"
import viewsImg from "./../../../../../../common/icons/views.svg"
import optionsImg from "./../../../../../../common/icons/options.svg"

type Props = {
  time: string
  body: string
  likes: string
  views: string
}

const Post = ({ time, body, likes, views }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.ava}>
            <img src={userImage} alt="" />
          </div>
          <div>
            <div className={styles.name}>Full Name</div>
            <div className={styles.time}>
              <img src={clockImg} alt="" />
              <span>{time}</span>
            </div>
          </div>
          <div className={styles.options}>
            <img src={optionsImg} alt="" />
          </div>
        </div>
        <div className={styles.body}>
          <p>{body}</p>
        </div>
        <div className={styles.statusBar}>
          <div className={styles.bottomContainer}>
            <a href="#" className={styles.likes}>
              <img src={likeImg} alt="" />
              <span>like</span>
              <span>{"+" + likes}</span>
            </a>
            <div className={styles.views}>
              <img src={viewsImg} alt="" />
              <span>views</span>
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
