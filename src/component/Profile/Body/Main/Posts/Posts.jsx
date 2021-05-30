import React from 'react'
import styles from './Posts.module.scss'
import PostCreator from './PostCreator/PostCreator'
import Post from './Post/Post'

const Posts = (props) => {

  let postsData = [
    { time: "21.03.2021", body: "Text of post", likes: "222", views: "72"},
    { time: "21.03.2021", body: "Text of post", likes: "222", views: "72"},
    { time: "21.03.2021", body: "Text of post", likes: "222", views: "72"},
    { time: "21.03.2021", body: "Text of post", likes: "222", views: "72"},
  ]

  const PostItem = postsData.map(el => <Post time={el.time} body={el.body} likes={el.likes} views={el.views}/>)

  return (
    <div className={styles.posts}>
      <PostCreator />
      { PostItem }
    </div>
  )
}

export default Posts