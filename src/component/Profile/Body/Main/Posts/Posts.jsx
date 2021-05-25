import React from 'react'
import styles from './Posts.module.scss'

const Posts = (props) => {
  return (
    <div className={styles.posts}>
      <div className={styles.addPosts}>
        <textarea></textarea>
        <button>Send</button>
      </div>
      <div className={styles.postData}>
        <div className={styles.topBar}>
          <div className={styles.ava}></div>
          <div className={styles.name}></div>
          <div className={styles.options}></div>
        </div>
        <div className={styles.body}></div>
        <div className={styles.statusBar}>
          <div className={styles.likes}></div>
          <div className={styles.views}></div>
        </div>
        Posts
      </div>
    </div>
  )
}

export default Posts