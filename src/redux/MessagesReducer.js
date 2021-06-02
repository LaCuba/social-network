const ADD_MESSAGE = "ADD-MESSAGE"


const initialState = {
  items: [
    { id: 2, name: "Michael Barskiy", lastMessage: "Text of last message"},
    { id: 3, name: "Full Name", lastMessage: "Text of last message"},
    { id: 4, name: "Nicholas Barskiy", lastMessage: "Text of last message"},
    { id: 5, name: "Andrew Barskiy", lastMessage: "Text of last message"},
    { id: 6, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 7, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 8, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 9, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 10, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 11, name: "Michael Anzorev", lastMessage: "Text of last message"},
    { id: 12, name: "Michael Anzorev", lastMessage: "Text of last message"}
  ],
  messages: [
    {id: 1, bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: 2, bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: false},
    {id: 3, bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: 4, bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: false},
    {id: 5, bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: 6, bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: 7, bodyMessage: "Text message about my life", messageTime: "21.03.2020", ownerMessage: true},
    {id: 8, bodyMessage: "Text of last message", messageTime: "21.03.2020", ownerMessage: false}
  ]
}

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 9,
        bodyMessage: action.body,
        messageTime: "21.03.2021",
        ownerMessage: true
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    default: 
      return state
  }
}

export const addMessageCreator = (body) => ({type: ADD_MESSAGE, body})


export default MessagesReducer