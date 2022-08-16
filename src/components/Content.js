import React from 'react';
import GameOver from './GameOver';
import TypingBox from './TypingBox';
import WritingForm from './WritingForm';

function Content() {
  return (
    <div className='content'>
      <GameOver />
      <TypingBox />
      <WritingForm />
    </div>
  );
}

export default Content;