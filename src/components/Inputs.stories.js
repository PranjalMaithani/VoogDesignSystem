import React from "react";
import { VoogInput } from "./Inputs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Input",
  component: VoogInput,
};

const Template = (args) => <VoogInput {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  label: "",
  autoComplete: "off",
};
