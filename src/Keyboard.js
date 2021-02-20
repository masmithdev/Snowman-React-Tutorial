import Button from './Button';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Keyboard() {
  const output = letters.map((letter) => {
    return (
      <Button key={letter}>{letter}</Button>
    )
  });

  return <div className="keyboard">{output}</div>
}
export default Keyboard;