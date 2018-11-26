import {
  SEND_MESSAGE,
  INCOMMING_MESSAGE,
  LOGIN,
  CONNECTED_STATUS
} from "../constants";

const actionBuilder = (type, payload = {}) => ({ type, payload });

export const sendMessageAction = text => actionBuilder(SEND_MESSAGE, { text });

export const incommingMessageAction = (text, username) =>
  actionBuilder(INCOMMING_MESSAGE, { text, username });

export const loginAction = username => actionBuilder(LOGIN, { username });

export const connectedStatusAction = (connected, error = null) =>
  actionBuilder(CONNECTED_STATUS, { connected, error });
