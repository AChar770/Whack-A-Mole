import { useGame } from "./GameContext";
import Intro from "./Intro";
import PlayArea from "./PlayArea";

export default function App() {
  const { isPlaying } = useGame();
  
  return (
    <>
      {isPlaying ? (
        <PlayArea />
      ) : (
        <Intro />
      )}
    </>
  );
}