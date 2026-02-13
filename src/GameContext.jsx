import { createContext, useContext, useState, useRef, useEffect } from "react";
const GameContext = createContext();
export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(2);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  }

  return () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };
}, [isPlaying, timeLeft]);

function whackMole() {
  setScore(score + 1);
  setMolePosition(Math.floor(Math.random() * 9));
}

function startGame() {
  setIsPlaying(true);
  setScore(0);
  setTimeLeft(15);
  setMolePosition(Math.floor(Math.random() * 9));

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
      timeLeft
      whackMole,
      startGame,
      restartGame,
    }}
  >
    {children}
  </GameContext.Provider>
);
}

// reminder that instead of every component having to write useContext(GameContext), they can just write useGame() - custom hook

export function useGame() {
    const context = useContext(GameContext)
    return context;
}

