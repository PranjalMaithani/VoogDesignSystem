import React from "react";
import { VoogCheckbox } from "./Checkbox.js";

export default {
  title: "Components/Checkbox",
  component: VoogCheckbox,

  argTypes: {
    onClick: { action: "checkbox-toggle" },
    label: { control: { type: "text" } },
    checked: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
};

const Template = (args) => <VoogCheckbox {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: "Something here",
};

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  label: "Something checked",
  checked: true,
};

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  label: "Something here",
  disabled: true,
};

export const CheckboxWithoutText = Template.bind({});
CheckboxWithoutText.args = {
  label: "",
};
