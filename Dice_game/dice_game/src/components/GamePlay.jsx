import { styled } from "styled-components";
import NumberSelector from "./NumberSelector";
import Score from "./Score";
import RollDice from "./RollDice";
import { useState } from "react";
import { ButtonS, Outlined } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1)
  const [score,setScore]=useState(0);
  const [error, setError]=useState("");
  const [show,setShow]= useState(false)

  const generateRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}

const resetScore = ()=>{
  setScore(0);
}

const rolldice = ()=>{
  if(!selectedNumber){
    setError("You have not selected any number")
     return
    }
    setError('')
 const randomNumber = generateRandomNumber(1,7);
 setCurrentDice((prev) => randomNumber)

 if(selectedNumber === randomNumber){
  setScore((prev)=>prev+randomNumber)
 }else{
  setScore((prev)=>prev-2)
 }
 setSelectedNumber(undefined)
}
const hide = ()=>{
  setShow((prev)=>!prev)
}
  return (
    <MainContainer>
      <div className="top_section">
        <Score  score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice currentDice={currentDice} rolldice={rolldice}/>
      <div className="btns">
        <Outlined onClick={resetScore}>Reset</Outlined>
        <ButtonS onClick={hide}>{show ? 'Hide Rules' : 'Show Rules'}</ButtonS>
      
      </div>
     {show ? <Rules/> :''} 
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
.top_section {
  display:flex;
  justify-content:space-around;
  align-items: end;
}
.btns{
  display: flex;
  flex-direction:column;
  align-items: center;
  gap:10px;
  
}
`;
