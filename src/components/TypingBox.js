import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentWordIndex, selectLineOne, selectLineTwo } from '../redux/typingSlice';
import Word from './Word';

function TypingBox() {
  const lineOne = useSelector(selectLineOne);
  const lineTwo = useSelector(selectLineTwo);
  const currentWordIndex = useSelector(selectCurrentWordIndex);

  return (
    <div className='typing-box'>
      <div className='typing-box-area' name='writing-area' id='writing-area'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>{lineOne.map((word, key) => <Word key={key} line={1} word={word} current={currentWordIndex} />)}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>{lineTwo.map((word, key) => <Word key={key+101} word={word} />)}</div>
      </div>
    </div>
  );
}

export default TypingBox;