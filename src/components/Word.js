import React from 'react';

function Word({word, current, wrong, line}) {
    // let color = '';
    // if(word.index === current && line === 1) color = 'gray';
    // if(word.isWrong && line === 1) color = 'red';
  return (
    <span className='current-line' style={{backgroundColor: word.bgColor, color: word.color}}>{word.word} </span>
  );
}

export default Word;