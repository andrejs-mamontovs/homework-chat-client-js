import { takeEvery, select, call, put } from "redux-saga/effects";
import { SEND_MESSAGE, LOGIN, URI } from "../constants";
import { connectedStatusAction } from "../actions";

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
      socket.off("connect");
      socket.on("connect", () => {
        socket.emit(LOGIN, { username });
      });
      socket.open();
      socket.connect();
    } else {
      yield put(connectedStatusAction(false, "User exists"));
    }
  });
};

const createUserCheckApiCall = username => {
  return function() {
    const body = JSON.stringify({ username: username });
    console.log("BODY:", body);
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
