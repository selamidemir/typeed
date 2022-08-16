import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsStarted, selectIsTyping, setStarted, setTyping, setwrittenWord, selectwrittenWord, writtenWordOver, selectTimeCount, decreaseTimeCount, setTimeCount, setIsGameOver, selectIsGameOver } from '../redux/typingSlice';

function WritingForm() {
  const dispatch = useDispatch();
  const isTyping = useSelector(selectIsTyping);
  const isStarted = useSelector(selectIsStarted);
  const writtenWord = useSelector(selectwrittenWord);
  const timeCount = useSelector(selectTimeCount);
 
  const startTyping = (e) => {
    e.preventDefault();
    dispatch(setStarted(true));
    dispatch(setTimeCount(-1));
  }

  const startGame = () => {
    dispatch(setTyping(true));
    dispatch(setTimeCount(19));
  }

  const handleChangeWord = (e) => {
    e.preventDefault();
    if (!isStarted) return;
    if (isStarted && !isTyping) startGame();
    if (e.target.value.slice(e.target.value.length - 1, e.target.value.length) !== ' ')
      dispatch(setwrittenWord(e.target.value));
    else dispatch(writtenWordOver());
  }

  useEffect(() => {
    const countdown = () => {
      return setTimeout(() => {
        dispatch(decreaseTimeCount());
      }, 1000);
    }
    if (timeCount < 0) return;
    if (timeCount > 0) {
      countdown();
    } else dispatch(setIsGameOver());;
  }, [timeCount, dispatch]);

  return (
    <div className='form-area'>
      <input name='writingInput' id='writingInput' value={writtenWord} onChange={(e) => handleChangeWord(e)} /> <span className='timer-area'>{timeCount < 0 ? '60' : timeCount}</span>
      <button onClick={(e) => startTyping(e)}><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </svg>
      </button>
    </div>
  );
}

export default WritingForm;