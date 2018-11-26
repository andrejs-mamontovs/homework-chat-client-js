import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ChatView from "./chatView";

storiesOf("ChatView", module).add("Default case", () => (
  <ChatView
    connected={true}
    messages={[{ text: "Welcome to chat", received: true }]}
    onSend={action("call send function")}
  />
));
