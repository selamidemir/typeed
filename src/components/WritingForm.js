import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsStarted, selectIsTyping, selectTimer, setStarted, setTimer, setTyping, setwrittenWord, selectwrittenWord, writtenWordOver } from '../redux/typingSlice';

function WritingForm() {
  const dispatch = useDispatch();
  const isTyping = useSelector(selectIsTyping);
  const isStarted = useSelector(selectIsStarted);
  const gameTimer = useSelector(selectTimer);
  const writtenWord = useSelector(selectwrittenWord);
  
  const startTyping = (e) => {
    e.preventDefault();
    if(gameTimer) {
      clearTimeout(gameTimer);
      dispatch(setTimer(null));
    }
    dispatch(setStarted(true));
  }

  const startGame = () => {
    const timer = setTimeout(() => {
      // end game after 1 min
      dispatch(setStarted(false));
    }, 60000);
    dispatch(setTimer(timer));
    dispatch(setTyping(true));
  }

  const wordOver = () => {
    // the written word is over
    // last pressed key is space
    dispatch(writtenWordOver());
  }

  const handleChangeWord = (e) => {
    e.preventDefault();
    if(isStarted && !isTyping) startGame();
    if(e.target.value.slice(e.target.value.length-1, e.target.value.length)!== ' ') 
      dispatch(setwrittenWord(e.target.value));
    else wordOver();
  }

  return (
    <div className='form-area'>
      <input name='writingInput' id='writingInput' value={writtenWord} onChange={(e) => handleChangeWord(e)} /> <span className='timer-area'>0:00</span>
      <button onClick={(e) => startTyping(e)}><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </svg>
      </button>
    </div>
  );
}

export default WritingForm;