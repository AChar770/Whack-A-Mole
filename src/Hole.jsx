import { useGame } from "./GameContext";

export default function Hole({ position }) {
  const { molePosition, whackMole, timeLeft } = useGame();
  const hasMole = position === molePosition;

  return (
    <div
      className="hole"
      style={{
        width: "150px",
        height: "150px",
        position: "relative",
        cursor: hasMole ? "pointer" : "default",
      }}
      onClick={hasMole && timeLeft > 0 ? whackMole : null}
    >
      {hasMole && (
        <div
          className="mole"
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  );
}
