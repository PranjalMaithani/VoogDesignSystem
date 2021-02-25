import SVGIcon from "./SVGs/SVGIcon";
import { CheckTickSVG } from "./SVGs/svgs";
import styled from "styled-components";

import { primary, grey } from "../design/colors";
import cornerRadius from "../design/cornerRadius";
import SetTypography from "./SetTypography";
import typeScale from "../design/typeScale";
import spacing from "../design/spacing";
import curves from "../design/animation";
import PropTypes from "prop-types";

const Wrapper = styled.label`
  display: inline-flex;
  position: relative;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    !props.disabled &&
    `&:hover > div {
    border-color: ${primary.voogBlue};
  }`}
`;

const LabelText = styled.p`
  margin: 0;
  margin-left: ${spacing.small}px;
  ${SetTypography(typeScale.p14)}
  user-select: none;
`;

const StyledCheckbox = styled.div`
  position: relative;

  width: 24px;
  height: 24px;
  background-color: ${primary.white};
  border: 1px solid ${grey.g2};
  border-radius: ${cornerRadius.small}px;
`;

const Check = styled.span`
  position: absolute;
  left: 7px;
  margin: 0;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  margin: 0px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;

  ~ span {
    display: none;
  }

  &:checked ~ span {
    display: block;
  }

  &:checked ~ div,
  &:focus ~ div {
    border-color: ${primary.voogBlue};
  }
`;

export const VoogCheckbox = ({ label, ...props }) => {
  return (
    <Wrapper disabled={props.disabled}>
      <HiddenCheckbox {...props} />
      <StyledCheckbox />
      <Check>
        <SVGIcon color={primary.voogBlue} svg={CheckTickSVG} />
      </Check>

      {label && <LabelText>{label}</LabelText>}
    </Wrapper>
  );
};

VoogCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.boolean,
  disabled: PropTypes.boolean,
};

VoogCheckbox.defaultProps = {
  label: "Something here",
  checked: false,
  disabled: false,
};
