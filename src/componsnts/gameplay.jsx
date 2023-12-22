import Scrore from "./scrore";
import Boxex from "./boxes";
import styled from "styled-components";
import Roll from "./rollDice";
import { useState } from "react";
import { Button } from "./buttons";
import { Outlinebtn } from "./buttons";
import Rule from "./rules";
const Gameplay = () => {
  const [score, setScore] = useState(0);

  const [selectNumber, setselectNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [erroe, setError] = useState();
  const [showrule, setshowrule] = useState(false);

  const num = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!selectNumber) {
      setError("yoi have not slected any number");
      return;
    }
    const randomNumber = num(1, 7);
    setcurrentDice((prev) => randomNumber);

    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setselectNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <MainContainer>
        <Scrore score={score}></Scrore>
        <Boxex
          erroe={erroe}
          selectNumber={selectNumber}
          setselectNumber={setselectNumber}
          setError={setError}
        ></Boxex>
      </MainContainer>
      <Roll currentDice={currentDice} rollDice={rollDice}></Roll>
      <Btn>
        <Outlinebtn onClick={resetScore}>Reset</Outlinebtn>
        <Button onClick={() => setshowrule((prev) => !prev)}>
          {" "}
          {showrule ? "hide" : "show"} rules
        </Button>
        {showrule && <Rule></Rule>}
      </Btn>
    </>
  );
};
export default Gameplay;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  /* padding-top: 5px; */
`;

const Btn = styled.div`
  position: relative;
  left: -16%;
  margin-top: 6px;
  Button {
    margin-bottom: 12px;
  }
`;
