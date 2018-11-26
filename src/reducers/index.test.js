import { chatReducer, defaultState } from "./index";

it("Default state", () => {
  expect(chatReducer()).toEqual(defaultState);
});
