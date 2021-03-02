import styled from "styled-components";

const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.columns}, ${props.width}px)`};
  gap: 10px;
  max-width: 1000px;
`;

export default DisplayGrid;
