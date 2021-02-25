import styled from "styled-components";
import { primary } from "../design/colors";

const thickness = 9;

const spinnerDimensions = `
  border-radius: 50%;
  width: ${thickness}em;
  height: ${thickness}em;
`;

const whiteSpinner = `
  border-top: 1.1em solid ${primary.white};
  border-right: 1.1em solid ${primary.white};
  border-bottom: 1.1em solid ${primary.white};
  border-left: 1.1em solid ${primary.whiteAlpha};
`;

const blueSpinner = `
  border-top: 1.1em solid ${primary.voogBlue};
  border-right: 1.1em solid ${primary.voogBlue};
  border-bottom: 1.1em solid ${primary.voogBlue};
  border-left: 1.1em solid ${primary.voogBlueAlpha};
`;

const Spinner = styled.div`
  &:after {
    ${spinnerDimensions}
  }

  ${spinnerDimensions}

  font-size: 0.12rem;
  position: relative;
  text-indent: -9999em;
  ${(props) => (props.color === "blue" ? blueSpinner : whiteSpinner)}

  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const spinner = ({ color }) => {
  return <Spinner color={color} />;
};
export default spinner;
