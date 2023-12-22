import styled from "styled-components";
import { Button } from "./buttons";
const StartGame = ({ toggle }) => {
  return (
    <>
      <Container>
        <img src="/image/dice.png" alt="" />

        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
};
export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .content h1 {
    color: #000;
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    white-space: nowrap;
  }
`;
