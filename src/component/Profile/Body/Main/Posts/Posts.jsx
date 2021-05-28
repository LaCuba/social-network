import React from 'react'
import styles from './Posts.module.scss'
import PostCreator from './PostCreator/PostCreator'
import Post from './Post/Post'

const Posts = (props) => {
  return (
    <div className={styles.posts}>
      <PostCreator />
      <Post />
    </div>
  )
}

export default Posts