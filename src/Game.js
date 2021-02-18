import * as BodyParts from './body-parts';
import './Game.css';

function Game() {
  return (
    <div className="game-wrapper">
      <div className="output-wrapper">
        <h1>Snowman Tutorial</h1>
        <div className="snowman-body shake">
          <div className="body-part"><img src={BodyParts.BodyBottom} alt="" /></div>
          <div className="body-part"><img src={BodyParts.BodyMiddle} alt="" /></div>
          <div className="body-part"><img src={BodyParts.Arms} alt="" /></div>
          <div className="body-part"><img src={BodyParts.Head} alt="" /></div>
          <div className="body-part"><img src={BodyParts.Clothes} alt="" /></div>
          <div className="body-part"><img src={BodyParts.Face} alt="" /></div>
        </div>
        <div className="message"><br />How to Make a simple<br />"Hangman" clone<br /> using React</div>
        <p>
          <a href="https://masmithdev.com">masmith.com</a>&nbsp;|&nbsp;
          <a href="https://www.instagram.com/masmithdev/">@masmithdev</a>&nbsp;|&nbsp;
          <a href="https://github.com/masmithdev">GitHub</a>  
        </p>
      </div>
    </div>
  );
}

export default Game;