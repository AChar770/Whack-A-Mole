import { useGame } from "./GameContext";

export default function App() {
  const { isPlaying } = useGame();

return (
    <>
    {isPlaying ? () : ()}
    //condition ? doThisIfTrue : doThisIfFalse
    </>
  );
}
