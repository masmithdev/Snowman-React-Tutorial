import './Game.css';
import GameInputs from './GameInputs';
import GameOutputs from './GameOutputs';

function Game() {
  return (
    <div className="game-wrapper">
      <GameOutputs />
      <GameInputs />
    </div>
  );
}
export default Game;