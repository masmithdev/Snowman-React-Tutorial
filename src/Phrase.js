import { useContext } from 'react';
import { GameContext } from './Game';

function Phrase() {
  const { solution, guesses, gameState } = useContext(GameContext);

  if (!solution || gameState === "initialising") {
    return null;
  }
  else {
    let output = null;
    let classes = "phrase"; 

    if (gameState === "win" || gameState === "lose") {
      output = solution;
      classes += " text-" + gameState;
    }
    else {
      output = [...solution].map((letter) => {
        if (letter.toLowerCase() === letter.toUpperCase()) {
          return letter; // must be punctuation, number or space
        }
        else if (guesses.some(x => x.letter === letter.toUpperCase())) {
          return letter; // the letter has already been guessed
        }
        else {
          return "_"; // the letter has not yet been guessed
        }
      });
    }
    
    if (output.length > 16) {
      classes += " phrase-long";
    }

    return <div className={classes}>{output}</div>
  }
}
export default Phrase;