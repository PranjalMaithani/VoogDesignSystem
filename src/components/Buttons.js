import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { primary, grey, secondary } from "../design/colors";
import cornerRadius from "../design/cornerRadius";
import spacing from "../design/spacing";
import typeScale from "../design/typeScale";
import SetTypography from "./SetTypography";
import PropTypes from "prop-types";

import Spinner from "./spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import SVGIcon from "./SVGs/SVGIcon";
import { TickSVG } from "./SVGs/svgs";

const sizes = ["small", "medium"];
const variants = ["primary", "alternate", "dark"];

const BUTTON_MODIFIERS = {
  //SIZES
  small: () => `
  min-width: 96px;
  height: 40px;

  ${SetTypography(typeScale.p14)}
  `,

  medium: () => `
  min-width: 120px;
  height: 56px;
  `,

  alternate: () => `
  background-color: ${primary.voogBlueAlt};
  color: ${primary.voogBlue};

  &:hover {
    background-color: ${primary.voogBlueAltHover};
  }

  &:active {
    background-color: ${primary.voogBlueAltPressed};
  }

  &:disabled {
    background-color: ${primary.voogBlueAlt};
  }
  `,

  dark: () => `
  color: white;
  background-color: ${primary.dark};
  &:hover {
    background-color: ${primary.darkHover};
  }
  &:disabled {
    background-color: ${primary.dark};
  }
  `,
};

//BUTTON

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: none;
  border-radius: ${cornerRadius.medium}px;
  padding: 0 ${spacing.small}px;

  ${SetTypography(typeScale.p16Bold)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ButtonWrapper = styled(Button)`
  background-color: ${primary.voogBlue};
  color: ${primary.white};

  &:hover {
    background-color: ${primary.voogBlueHover};
  }

  &:active {
    background-color: ${primary.voogBluePressed};
  }

  &:disabled {
    background-color: ${primary.voogBlue};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const Icon = styled.div`
  width: 24px;
  max-width: 24px;
  margin-right: ${spacing.extraSmall}px;
`;

export const VoogButton = ({
  state,
  variant,
  modifiers,
  onClick,
  label,
  size,
  isDisabled,
  ...props
}) => {
  const sizeValue = size;

  if (!sizes.includes(size)) {
    size = "medium";
  }

  if (!variants.includes(variant)) {
    variant = "primary";
  }

  return (
    <ButtonWrapper
      modifiers={[size, variant]}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {state !== null && (
        <Icon>
          {state === "saving" && (
            <Spinner color={variant === "alternate" ? "blue" : "white"} />
          )}

          {state === "saved" && <SVGIcon svg={TickSVG} />}
        </Icon>
      )}

      {label || props.children}
    </ButtonWrapper>
  );
};

VoogButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium"]),
  state: PropTypes.oneOf([null, "saving", "saved"]),
  variant: PropTypes.oneOf(["primary", "alternate", "dark"]),
  isDisabled: PropTypes.bool,
};

VoogButton.defaultProps = {
  label: "Let's do it",
  onClick: undefined,
  size: "medium",
  variant: "primary",
  isDisabled: false,
  state: null,
};
