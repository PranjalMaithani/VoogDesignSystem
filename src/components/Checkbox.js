import SVGIcon from "./SVGs/SVGIcon";
import { CheckboxTickSVG } from "./SVGs/svgs";
import styled from "styled-components";

import { primary, grey } from "../design/colors";
import cornerRadius from "../design/cornerRadius";
import SetTypography from "./SetTypography";
import typeScale from "../design/typeScale";
import spacing from "../design/spacing";
import curves from "../design/animation";
import PropTypes from "prop-types";
import hiddenStyle from "./HiddenStyle";

const Wrapper = styled.label`
  display: inline-flex;
  position: relative;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    !props.disabled &&
    `&:hover > div {
    border-color: ${grey.g1};
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
  transform: scale(0);
  transition: transform 0.3s ${curves.inFast};

  //to prevent blurry animation in firefox
  transform: translateZ(0);
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  ${hiddenStyle}

  ~ span {
    transform: scale(0);
  }

  &:checked ~ span {
    transform: scale(1);
  }

  &:focus ~ div {
    border-color: ${grey.g1};
  }

  &:checked ~ div {
    border-color: ${primary.voogBlue};
  }
`;

export const VoogCheckbox = ({ label, ...props }) => {
  return (
    <Wrapper disabled={props.disabled}>
      <HiddenCheckbox {...props} />
      <StyledCheckbox />
      <Check>
        <SVGIcon color={primary.voogBlue} svg={CheckboxTickSVG} />
      </Check>

      {label && <LabelText>{label}</LabelText>}
    </Wrapper>
  );
};

VoogCheckbox.propTypes = {
  label: PropTypes.string,
};

VoogCheckbox.defaultProps = {
  label: "Something here",
};
