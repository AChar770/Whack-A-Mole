import { useGame } from "./GameContext";
import Hole from "./Hole";

export default function PlayArea() {
  const { score, restartGame } = useGame();

  return (
    <div>
      <h1>Whack-A-Mole</h1>
      <div>
        <span>Score: {score}</span>
        <button onClick={restartGame}>Restart</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 150px)",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <Hole key={i} position={i} />
        ))}
      </div>
    </div>
  );
}
