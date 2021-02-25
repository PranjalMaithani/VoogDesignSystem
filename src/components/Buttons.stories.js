import React from "react";
import { VoogButton } from "./Buttons";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: VoogButton,
  argTypes: {
    onClick: { action: "button-click" },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium"],
        default: "small",
      },
    },
    state: {
      control: {
        type: "radio",
        options: [null, "saving", "saved"],
        default: null,
      },
    },
    variant: {
      control: { type: "radio", options: ["primary", "alternate", "dark"] },
    },
    isDisabled: { control: { type: "boolean" } },
    label: { control: { type: "text" } },
  },
};

const Template = (args) => <VoogButton {...args} />;

export const ActionButton = Template.bind({});

export const SavingButton = Template.bind({});
SavingButton.args = {
  label: "Saving",
  state: "saving",
};

export const SavedButton = Template.bind({});
SavedButton.args = {
  label: "Saved",
  state: "saved",
};

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
