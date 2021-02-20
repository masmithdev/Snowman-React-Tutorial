import Button from './Button';
import Keyboard from './Keyboard';

function GameInputs() {
  return (
    <div className="input-wrapper">
      <Keyboard />
      <Button>New Game</Button>
    </div>
  );
}
export default GameInputs;