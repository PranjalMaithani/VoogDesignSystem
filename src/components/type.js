import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../design/typography";
import { primary, grey, secondary } from "../design/colors";

export const Type = styled.p`
  font-size: ${(props) => props.typeScale.fontSize};
  line-height: ${(props) => props.typeScale.lineHeight};
  font-weight: ${(props) => props.typeScale.fontWeight};
`;
