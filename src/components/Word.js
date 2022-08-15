import React from 'react';

function Word({word, current, wrong, line}) {
    let color = 'white';
    if(word.index === current && line === 1) color = 'gray';
    if(word.isWrong && line === 1) color = 'red';
  return (
    <span className='current-line' style={{backgroundColor: color}}>{word.word} </span>
  );
}

export default Word;