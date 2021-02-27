import React from "react";
import { VoogSelect } from "./DropdownSelect";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Select",
  component: VoogSelect,
};

const Template = (args) => <VoogSelect {...args} />;

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  label: "Fruit",
  multiple: true,
};
