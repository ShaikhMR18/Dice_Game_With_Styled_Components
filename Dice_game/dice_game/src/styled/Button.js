import styled from 'styled-components'

export const ButtonS = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background-color: #000;
  color: #ffffff;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background-color ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background-color ease-in;
  }
`;

export const Outlined = styled(ButtonS)`
background-color:white;
color:black;
border:1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: 0.3s background-color ease-in;
  }
`;