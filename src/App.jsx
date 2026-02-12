import { useGame } from "./GameContext";
import PlayArea from "./PlayArea";
import Scoreboard from "./Scoreboard";
import Intro from "./Intro";

export default function App() {
  const { isPlaying } = useGame();

return (
    <>
      <h1>Whack-a-Mole</h1>
      {playing ? (
        <>
          <Scoreboard />
          <PlayArea />
        </>
      ) : (
        <Intro/>
      )}
    </>
  );
}