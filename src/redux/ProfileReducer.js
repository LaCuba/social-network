const ADD_POST = "ADD-POST"

const initialState = {
  posts: [
    {id: 1, time: "21.03.2021", body: "Text of post", likes: "222", views: "72"},
    {id: 2, time: "21.03.2021", body: "Text of post", likes: "222", views: "72"},
    {id: 3,  time: "21.03.2021", body: "Text of post", likes: "222", views: "72"},
    {id: 4,  time: "21.03.2021", body: "Text of post", likes: "222", views: "72"}
  ]
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        time: "16.05.2021",
        body: action.body,
        likes: "2",
        views: "5"
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }

    default:
      return state
  }
}

export const addPostCreator = (time, body) => ({type: ADD_POST, time, body}) 

export default ProfileReducer