import { useContext } from 'react';
import { GameContext } from './Game';

function Message() {
  const { gameState } = useContext(GameContext);
  
  switch (gameState) {
    case "win":
      return <div className="message text-win">You Win!</div>
    case "lose":
      return <div className="message text-lose">You Lose!</div>
    case "initialising":
      return <div className="message">Setting up new game...</div>
    default:
      return null;
  }
}
export default Message;