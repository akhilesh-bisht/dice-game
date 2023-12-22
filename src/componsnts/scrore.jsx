import styled from "styled-components";

const Scrore = ({ score }) => {
  return (
    <Scorecontainer>
      <h1>{score}</h1>
      <p>total score</p>
    </Scorecontainer>
  );
};
export default Scrore;

const Scorecontainer = styled.div`
  max-width: 200px;

  h1 {
    font-size: 100px;
    line-height: 100px;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
`;
