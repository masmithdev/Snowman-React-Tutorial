import React, { useEffect, useState } from 'react';
import './Game.css';
import GameInputs from './GameInputs';
import GameOutputs from './GameOutputs';

export const GameContext = React.createContext();

const initialGuesses = [
  { letter: "O", status: "correct" },
  { letter: "Z", status: "wrong" },
  { letter: "Y", status: "wrong" }
];

const initialSolution = "Hello, Snowman!"

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [solution, setSolution] = useState("");
  const [state, setState] = useState("");

  const newGame = () => setState("initialising");

  useEffect(newGame, []); // initialises game

  useEffect(() => { // respond to changes to "state"
    if (state === "initialising") {
      setSolution(initialSolution);
      setGuesses(initialGuesses);
      setTimeout(() => setState("playing"), 1000);
    }
  }, [state]);

  const contextState = {
    gameState: state,
    guesses: guesses,
    solution: solution
  }

  return (
    <div className="game-wrapper">
      <GameContext.Provider value={contextState}>
        <GameOutputs />
        <GameInputs />
      </GameContext.Provider>
    </div>
  );
}
export default Game;