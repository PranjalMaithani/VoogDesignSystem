import React from "react";
import { VoogInput } from "./Inputs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Input",
  component: VoogInput,
  argTypes: {
    label: { control: { type: "text" } },
    state: { control: { type: "radio", options: [null, "loading"] } },
    autoComplete: { control: { type: "radio", options: ["on", "off"] } },
    info: { control: { type: "text" } },
    error: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
  },
};

const Template = (args) => <VoogInput {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  label: "First Name",
  autoComplete: "off",
};

export const InputWithData = Template.bind({});
InputWithData.args = {
  label: "Your Name",
  autoComplete: "off",
  defaultValue: "Pranjal Maithani",
};

export const InputLoading = Template.bind({});
InputLoading.args = {
  autoComplete: "off",
  defaultValue: "Content",
  state: "loading",
};

export const InputWithInfo = Template.bind({});
InputWithInfo.args = {
  label: "Your Name",
  autoComplete: "off",
  info: "Enter your full name",
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  label: "Email",
  autoComplete: "off",
  error: "Not a valid email address",
  defaultValue: "Pranjal Maithani",
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  disabled: true,
};
