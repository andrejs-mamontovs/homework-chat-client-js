import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import LoginView from "./loginView";

storiesOf("Login view", module)
  .add("Default", () => (
    <LoginView connected={false} onLogin={action("call login function")} />
  ))
  .add("Error", () => (
    <LoginView
      connected={false}
      error={"error text"}
      onLogin={action("call login function")}
    />
  ));
