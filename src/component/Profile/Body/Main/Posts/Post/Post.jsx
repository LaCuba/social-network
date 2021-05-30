import React from 'react'
import styles from './Post.module.scss'
import userImage from './../../../../../../common/images/user-pro-img.png'
import clock from './../../../../../../common/icons/clock.png'
import like from './../../../../../../common/icons/like.svg'
import views from './../../../../../../common/icons/views.svg'
import options from './../../../../../../common/icons/options.svg'

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.ava}>
            <img src={userImage} alt="" />
          </div>
          <div>
            <div className={styles.name}>
              Full Name
              </div>
            <div className={styles.time}>
              <img src={clock} alt="" />
              <span>{props.time}</span>
            </div>
          </div>
          <div className={styles.options}>
            <img src={options} alt="" />
          </div>
        </div>
        <div className={styles.body}>
          <p>
            {props.body}
          </p>
        </div>
        <div className={styles.statusBar}>
          <div className={styles.bottomContainer}>
            <a href="#" className={styles.likes}>
              <img src={like} alt="" />
              <span>like</span>
              <span>{"+" + props.likes}</span>
            </a>
            <div className={styles.views}>
              <img src={views} alt="" />
              <span>views</span>
              <span>{props.views}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post