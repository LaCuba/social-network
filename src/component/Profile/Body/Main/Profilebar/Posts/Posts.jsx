import React from 'react'
import styles from './Posts.module.scss'
import PostCreator from './PostCreator/PostCreator'
import Post from './Post/Post'

const Posts = (props) => {

  const PostItem = props.posts.map(el => <Post time={el.time} body={el.body} 
    likes={el.likes} views={el.views} />)

  return (
    <div className={styles.posts}>
      <PostCreator addPostCreator={props.addPostCreator} />
      { PostItem }
    </div>
  )
}

export default Posts