import styled from "styled-components";

const Boxex = ({ setError, erroe, selectNumber, setselectNumber }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  const numberhandler = (box) => {
    setselectNumber(box);
    setError("");
  };

  return (
    <>
      <NumberSelector>
        <div className="flex">
          {arr.map((box) => (
            <Box
              isSlected={box === selectNumber}
              key={box}
              onClick={() => numberhandler(box)}
            >
              {box}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
        <p className="error">{erroe}</p>
      </NumberSelector>
    </>
  );
};
export default Boxex;
const NumberSelector = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: end;
  }
  .error {
    color: red;
    font-size: 30px;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  cursor: pointer;
  font-weight: 700;
  background-color: ${(props) => (props.isSlected ? "black" : "white")};
  color: ${(props) => (!props.isSlected ? "black" : "white")};
`;
