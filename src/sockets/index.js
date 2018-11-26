import openSocket from "socket.io-client";

import { incommingMessageAction, connectedStatusAction } from "../actions";
import { INCOMMING_MESSAGE, LOGIN, LOGOFF, URI } from "../constants";

export const socket = openSocket(URI, {
  autoConnect: false
});

export const setupSocket = dispatch => {
  socket.on(INCOMMING_MESSAGE, data => {
    dispatch(incommingMessageAction(data.text, data.username));
  });

  socket.on(LOGIN, () => {
    dispatch(connectedStatusAction(true, null));
  });
  socket.on(LOGOFF, () => {
    socket.off("connect");
    socket.close();
    dispatch(connectedStatusAction(false, "Idle timeout"));
  });

  return socket;
};

export default socket;
