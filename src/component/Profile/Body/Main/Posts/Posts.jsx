import React from 'react'
import styles from './Posts.module.scss'
import userImage from './../../../../../common/images/user-pro-img.png'
import clock from './../../../../../common/icons/clock.png'
import like from './../../../../../common/icons/like.svg'
import views from './../../../../../common/icons/views.svg'
import options from './../../../../../common/icons/options.svg'

const Posts = (props) => {
  return (
    <div className={styles.posts}>
      <div className={styles.addPosts}>
        <textarea></textarea>
        <button>Send</button>
      </div>
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
                <span>21.09.2020</span>
              </div>
            </div>
            <div className={styles.options}>
              <img src={options} alt="" />
            </div>
          </div>
          <div className={styles.body}>
            Text of post
          </div>
          <div className={styles.statusBar}>
            <div className={styles.bottomContainer}>
              <a href="#" className={styles.likes}>
                <img src={like} alt="" />
                <span>like</span>
                <span>+25</span>
              </a>
              <div className={styles.views}>
                <img src={views} alt="" />
                <span>views</span>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts