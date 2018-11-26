import { SEND_MESSAGE, INCOMMING_MESSAGE, LOGIN } from "../constants";
import {
  sendMessageAction,
  incommingMessageAction,
  loginAction
} from "./index";
it("prepare send message action", () => {
  const exp = {
    type: SEND_MESSAGE,
    payload: { text: "hello" }
  };
  expect(sendMessageAction("hello")).toEqual(exp);
});

it("prepare incomming message action", () => {
  const exp = {
    type: INCOMMING_MESSAGE,
    payload: { text: "hello", username: "abc" }
  };
  expect(incommingMessageAction("hello", "abc")).toEqual(exp);
});

it("prepare login action", () => {
  const exp = {
    type: LOGIN,
    payload: { username: "abc" }
  };
  expect(loginAction("abc")).toEqual(exp);
});

// it("prepare username exists action", () => {
//   const exp = {
//     type: USERNAME_EXISTS,
//     payload: {}
//   };
//   expect(usernameExistsAction()).toEqual(exp);
// });

// it("prepare username is set action", () => {
//   const exp = {
//     type: USERNAME_EXISTS,
//     payload: {}
//   };
//   expect(usernameIsSetAction()).toEqual(exp);
// });
