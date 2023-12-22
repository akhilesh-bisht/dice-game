import { useState } from "react";
import StartGame from "./componsnts/startGame";
import Gameplay from "./componsnts/gameplay";

function App() {
  const [isGameStart, setisGameStart] = useState(false);
  const toggleGamePlay = () => {
    setisGameStart((prev) => !prev);
  };
  return (
    <>{isGameStart ? <Gameplay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
  <Gameplay></Gameplay>;
}

export default App;
