import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { primary, grey, secondary } from "../design/colors";
import typeScale from "../design/typeScale";
import SetTypography from "./SetTypography";
import PropTypes from "prop-types";

import { useState } from "react";

const INPUT_PADDING_TOP = 24;
const INPUT_PADDING_LEFT = 16;

const INPUT_MODIFIERS = {
  error: () => `
  border-color: ${secondary.red};
  ~ label, 
  &:focus ~ label, 
  &:active ~ label {
    color: ${secondary.red};
  }

  &:hover, &:focus, &:active {
    border-color: ${secondary.red};
  }
  `,

  disabled: () => `
  opacity: 0.5;
  cursor: not-allowed;
  `,
};

const InputDiv = styled.div`
  display: inline-block;
  position: relative;

  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

const InputLabel = styled.label`
  display: inline-block;
  position: absolute;
  overflow: visible;
  margin: 0;
  cursor: text;
  transition: 0.2s;
  ${(props) => {
    if (props.isAbove) {
      return `
      background-color: ${primary.white};
        top: -8px;
        bottom: 0;
        left: 8px;
        ${SetTypography(typeScale.l12Bold)}
        height: 16px;
        padding: 0 4px;
        color: ${primary.primaryGrey};
        `;
    } else {
      return `
        ${SetTypography(typeScale.p14)}
        top: ${INPUT_PADDING_TOP / 2}px;
        left: ${INPUT_PADDING_LEFT}px;
        color: ${grey.g1};
        `;
    }
  }}
`;

const Input = styled.input`
  width: 296px;
  height: 48px;
  padding: ${INPUT_PADDING_TOP}px ${INPUT_PADDING_LEFT}px;
  color: ${primary.primaryGrey};
  background-color: ${primary.white};
  border: 1px solid ${grey.g3};
  border-radius: 4px;
  ${SetTypography(typeScale.p14)}

  &:hover {
    border-color: ${grey.g2};
  }

  &:active,
  &:focus {
    border-color: ${primary.voogBlue};
    outline: none;
  }

  &:active ~ label,
  &:focus ~ label {
    color: ${primary.voogBlue};
  }

  &:disabled ~ label {
    pointer-events: none;
  }

  &:disabled {
    pointer-events: none;
  }

  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

const AdditionalText = styled.p`
  color: ${grey.g1};
  ${SetTypography(typeScale.l12)}
  margin: 8px;
`;

export const VoogInput = ({ info, error, label, ...props }) => {
  const [isLabelAbove, setIsLabelAbove] = useState(props.value || props.defaultValue);
  const labelValue = label || "Label";

  const checkInput = (event, isFocused) => {
    if (isFocused) {
      setIsLabelAbove(true);
      return;
    }

    if (event.currentTarget.value === "") {
      setIsLabelAbove(false);
      return;
    }
  };

  const hasError = error !== "" && error !== null;
  const isDisabled = props.disabled && true;

  return (
    <InputDiv modifiers={[isDisabled && "disabled"]}>
      <Input
        id={labelValue}
        name="input"
        onFocus={(e) => {
          checkInput(e, true);
        }}
        onBlur={(e) => {
          checkInput(e, false);
        }}
        modifiers={[hasError && "error"]}
        {...props}
      />

      <InputLabel htmlFor={labelValue} isAbove={isLabelAbove}>
        {labelValue}
      </InputLabel>

      {info && <AdditionalText>{info}</AdditionalText>}
      {hasError && (
        <AdditionalText style={{ color: secondary.red }}>
          {error}
        </AdditionalText>
      )}
    </InputDiv>
  );
};

VoogInput.propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
};

VoogInput.defaultProps = {
  label: "Label",
  info: "",
  error: "",
};
