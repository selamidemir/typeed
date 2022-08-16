import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsStarted, selectIsTyping, setTyping, setwrittenWord, selectwrittenWord, writtenWordOver, selectTimeCount, decreaseTimeCount, setTimeCount, setIsGameOver, selectIsGameOver } from '../redux/typingSlice';

function WritingForm() {
  const dispatch = useDispatch();
  const isTyping = useSelector(selectIsTyping);
  const isStarted = useSelector(selectIsStarted);
  const writtenWord = useSelector(selectwrittenWord);
  const timeCount = useSelector(selectTimeCount);
  const isGameOver = useSelector(selectIsGameOver);


  const startGame = () => {
    dispatch(setTyping(true));
    dispatch(setTimeCount(9));
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
    <>
      {!isGameOver &&
        <div className='form-area'>
          <input name='writingInput' id='writingInput' value={writtenWord} onChange={(e) => handleChangeWord(e)} /> 

        </div>
      }
    </>
  );
}

export default WritingForm;