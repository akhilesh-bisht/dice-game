import styled from "styled-components";

const Roll = ({ currentDice, rollDice }) => {
  return (
    <Dicecontainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/image/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to Roll</p>
    </Dicecontainer>
  );
};

export default Roll;

const Dicecontainer = styled.div`
  .dice {
    cursor: pointer;
  }
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
    font-family: 500;
  }
`;
