export default function(state = null, action) {
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload.messages
    case 'CREATE_MESSAGE':
      const newMessages = state.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    default:
      return state;
  }
}


