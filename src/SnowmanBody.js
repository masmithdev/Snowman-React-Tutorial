import { useContext } from 'react';
import * as BodyParts from './body-parts';
import { GameContext } from './Game';

const bodyParts = [
  BodyParts.BodyBottom, BodyParts.BodyMiddle, BodyParts.Head,
  BodyParts.Arms, BodyParts.Clothes, BodyParts.Face];

function SnowmanBody() {
  const { guesses, gameState } = useContext(GameContext);

  if (gameState === "initialising") {
    return null;
  }
  else {
    const output = [];
    const mistakes = guesses.filter(x => x.status === "wrong").length;
    
    for (let i = 0; i < mistakes && i < bodyParts.length; i++) {
      output.push(
        <div key={i} className="body-part">
          <img alt="" src={bodyParts[i]} />
        </div>
      );
    }

    let classes = "snowman-body";
    if (gameState === "lose") {
      classes += " shake";
    }

    return <div className={classes}>{output}</div>
  }
}
export default SnowmanBody;