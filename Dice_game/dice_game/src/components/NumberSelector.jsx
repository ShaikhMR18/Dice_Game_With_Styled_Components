import { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({setError,selectedNumber,setSelectedNumber,error}) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value);
    setError("")
  }
  return (
    <NumberContainer> 
    <p className="error">{error}</p>
      <div className="flex">
      {numbers.map((item, index) => {
        return <Box isSelected={ item===selectedNumber} onClick={()=>numberSelectorHandler(item)} key={index}>{item}</Box>;
      })}
      </div>
      <p>Selelect Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
display:flex;
flex-direction:column;
align-items:end;
.flex{
    display: flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:700;
}
.error{
  color:red;
 }
`
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color:${(props)=> props.isSelected ? "black" : 'white'};
  color:${(props)=> !props.isSelected ? "black" : 'white'};
  cursor: pointer;
  transition: 0.3s background-color ease-in;


`;
