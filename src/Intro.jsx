import { useGame } from "./GameContext";

export default function Intro() {
    const { startGame } = useGame();

return (
    <div>
        <h1>Whack-a-Mole</h1>
        <p><em>Click the mole when it appears to score points!</em></p>
        <button onClick={startGame}>Play</button>
    </div>
);
}