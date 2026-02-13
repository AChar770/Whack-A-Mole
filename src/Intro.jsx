import { useGame } from "./GameContext";

export default function Intro() {
    const { startGame } = useGame();

return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem' 
    }}>
      <h1>Whack a Mole</h1>
      <p>Click the mole when it appears to score points!</p>
      
      {/* Mole Image */}
      <img 
        src="/mole.png" 
        alt="Mole" 
        style={{ 
          width: '150px', 
          height: '150px',
          margin: '2rem auto',
          display: 'block'
        }} 
      />
      
      <button 
        onClick={startGame}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.5rem',
          cursor: 'pointer'
        }}
      >
        Play
      </button>
    </div>
);
}