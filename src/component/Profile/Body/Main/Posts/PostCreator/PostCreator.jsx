import React from 'react'
import styles from './PostCreator.module.scss'

const PostCreator = (props) => {
  return (
    <div className={styles.postCreator}>
      <div className={styles.container}>
        <textarea placeholder="Write your post"></textarea>
        <button>Add Post</button>
      </div>
    </div>
  )
}

export default PostCreator