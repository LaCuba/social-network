const FOLLOWED = "FOLLOWED"

const initialState = {
  users: [
    { id: 2, name: "Mahmut", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: true},
    { id: 3, name: "Pavel", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: false},
    { id: 4, name: "Anzor", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: false},
    { id: 5, name: "Maga", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: true},
    { id: 6, name: "Kolya", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: false},
    { id: 7, name: "Kolya", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: true},
    { id: 8, name: "Kolya", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: false},
    { id: 9, name: "Kolya", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: false},
    { id: 10, name: "Kolya", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: true},
    { id: 11, name: "Kolya", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: false},
    { id: 12, name: "Valya", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa", followed: true}
  ]
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: action.selector}
          }
          return u
        })
      }
    default: 
      return state
  }
}

export const addFollowed = (userId, selector) => ({type: FOLLOWED, userId, selector})

export default UsersReducer
