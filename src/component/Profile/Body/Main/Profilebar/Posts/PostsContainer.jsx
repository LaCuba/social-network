import React from 'react'
import { connect } from 'react-redux'
import { addPostCreator } from '../../../../../../redux/ProfileReducer'
import Posts from './Posts'

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts
  }
}

const PostsContainer = connect(mapStateToProps, { addPostCreator })(Posts)

export default PostsContainer