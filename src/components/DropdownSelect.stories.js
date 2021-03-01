import React from "react";
import { VoogSelect } from "./DropdownSelect";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Select",
  component: VoogSelect,
  argTypes: {
    label: { control: { type: "text" } },
    multiple: { control: { type: "boolean" } },
    options: { control: { type: "array" } },
  },
};

const Template = (args) => <VoogSelect {...args} />;

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  label: "Fruits",
  multiple: true,
  options: [
    "Apple",
    "Orange",
    "Berry",
    "Banana",
    "Peach",
    "Grapes",
    "Pineapple",
    "Gauva",
    "Strawberries",
    "Custard",
  ],
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  label: "Bakery",
  options: ["Donut", "Brownie", "Roll", "Cake", "Puff", "Sandwich"],
};
