import {
  SEND_MESSAGE,
  INCOMMING_MESSAGE,
  LOGIN,
  CONNECTED_STATUS
} from "../constants";

const defaultState = {
  user: { name: "", connected: false },
  messages: []
};

const chatReducer = (state = defaultState, action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case CONNECTED_STATUS: {
      return {
        ...state,
        messages: [],
        user: {
          ...state.user,
          connected: action.payload.connected,
          error: action.payload.error
        }
      };
    }
    case LOGIN:
      const { username } = action.payload;
      const error =
        !username || username.trim().length === 0 ? "Nickname not set" : null;
      return {
        ...state,
        user: { ...state.user, name: username, error: error }
      };
    case INCOMMING_MESSAGE:
      return {
        user: state.user,
        messages: [
          ...state.messages,
          {
            username: action.payload.username,
            text: action.payload.text,
            received: true
          }
        ]
      };
    case SEND_MESSAGE:
      return {
        user: state.user,
        messages: [
          ...state.messages,
          {
            username: state.username,
            text: action.payload.text,
            received: false
          }
        ]
      };
    default:
      return state;
  }
};

export { chatReducer, defaultState };
