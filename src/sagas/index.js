import { takeEvery, select, call, put } from "redux-saga/effects";
import { SEND_MESSAGE, LOGIN, URI, CONNECTED_STATUS } from "../constants";
import { connectedStatusAction } from "../actions";
import { openConnection, closeSocket } from "../sockets";

const createSage = function*({ socket }) {
  yield takeEvery(SEND_MESSAGE, function*(action) {
    const username = yield select(state => state.user.name);
    socket.emit(SEND_MESSAGE, { ...action.payload, username });
  });

  yield takeEvery(LOGIN, function*(action) {
    const { username } = action.payload;
    if (!username || username.trim().length === 0) {
      return;
    }
    const response = yield call(createUserCheckApiCall(username));

    if (response.status === "ok") {
      openConnection(username);
    } else {
      yield put(connectedStatusAction(false, "User exists"));
    }
  });

  yield takeEvery(CONNECTED_STATUS, action => {
    if (!action.payload.connected) {
      closeSocket();
    }
  });
};

const createUserCheckApiCall = username => {
  return function() {
    const body = JSON.stringify({ username: username });
    return fetch(URI + "/exists", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      return res.json();
    });
  };
};

export default createSage;
