import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#B22727" : "#c55ffc")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;

  &:hover {
    border: 2px solid black;
    background: ${(props) => (props.primary ? "#c55ffc" : "white")};
    color: ${(props) => (props.primary ? "c55ffc" : "black")};
  }
`;
