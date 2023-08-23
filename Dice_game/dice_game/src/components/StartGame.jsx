import styled from "styled-components";
import dice from "../assets/images/dices.png";
import { ButtonS } from "../styled/Button";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .content {
    h1 {
      font-size: 98px;
      white-space: nowrap;
    }
    .btn-end {
      display: flex;
      justify-content: flex-end;
    }
  }
`;


const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={dice} alt="dice-logo" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <div className="btn-end">
          <ButtonS onClick={toggle}>Play Game</ButtonS>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;
