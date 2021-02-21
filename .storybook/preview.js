import { addDecorator, addParameters } from "@storybook/react";
import { GlobalStyle } from "../src/design/Global";

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "white",
      },
      {
        name: "dark",
        value: "#1b2024",
      },
    ],
  },
};
