import { connect } from 'react-redux'
import actions from '../../../../../redux/actions/actions'
import Posts from './Posts'

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts
  }
}

const addPostCreator = actions.profile.addPostCreator

const PostsContainer = connect(mapStateToProps, { addPostCreator })(Posts)

export default PostsContainer