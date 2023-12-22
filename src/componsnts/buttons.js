import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  height: 44px;
  border-radius: 5px;
  min-width: 220px;
  padding: 10px 18px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.5s ease-in;
  margin-left: 58%;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s ease-in;
  }
`;
export const Outlinebtn = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
    transition: 0.2s ease-in;
  }
`;
