import { createContext, useContext, useState } from "react";
const GameContext = createContext();
export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(2);
  const [isPlaying, setIsPlaying] = useState(false);
}

function whackMole() {
  setScore(score + 1);
  setMolePosition(Math.floor(Math.random() * 9));
}

function startGame() {
  setIsPlaying(true);
  setScore(0);
  setMolePosition(Math.floor(Math.random() * 9));
}

function restartGame() {
  setIsPlaying(false);
  setScore(0);
  setMolePosition(Math.floor(Math.random() * 9));
}

return (
  <GameContext.Provider
    value={{
      score,
      molePosition,
      isPlaying,
      whackMole,
      startGame,
      restartGame,
    }}
  >
    {children}
  </GameContext.Provider>
);

// reminder that instead of every component having to write useContext(GameContext), they can just write useGame() - custom hook

export function useGame() {
    const context = useContext(GameContext)
    return context;
}

