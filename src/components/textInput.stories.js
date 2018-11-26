import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextInput from "./textInput";

storiesOf("Text input", module).add("Default case", () => (
  <TextInput onSend={action("call send function")} />
));
