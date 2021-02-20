import React from 'react';
import Message from './Message';
import Phrase from './Phrase';
import SnowmanBody from './SnowmanBody';

const GameOutputs = React.memo(() => {
  return (
    <div className="output-wrapper">
      <SnowmanBody />
      <Phrase />
      <Message />
    </div>
  );
});
export default GameOutputs;