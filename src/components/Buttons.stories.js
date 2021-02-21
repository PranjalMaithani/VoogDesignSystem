import React from "react";
import { VoogButton } from "./Buttons";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: VoogButton,
  argTypes: {
    onClick: { action: "button-click" },
    size: { control: { type: "radio", options: ["small", "medium"] } },
    variant: {
      control: { type: "radio", options: ["primary", "alternate", "dark"] },
    },
    disabled: { control: { type: "boolean" } },
    label: { control: { type: "text" } },
  },
};

const Template = (args) => <VoogButton {...args} />;

export const ActionButton = Template.bind({});

export const AlternateButton = Template.bind({});
AlternateButton.args = {
  variant: "alternate",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: "small",
};

export const DarkButton = Template.bind({});
DarkButton.args = {
  variant: "dark",
};
DarkButton.parameters = {
  backgrounds: { default: "dark" },
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  isDisabled: true,
};
