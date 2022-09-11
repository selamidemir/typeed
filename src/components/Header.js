import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTimeCount, setIsGameOver, setStarted, setTyping } from '../redux/typingSlice';

function Header() {
  const dispatch = useDispatch();
  const timeCount = useSelector(selectTimeCount);
  const startTyping = (e) => {
    e.preventDefault();
    dispatch(setIsGameOver(false));
    dispatch(setStarted(true));
    dispatch(setTyping(false));
  }

  return (
    <div className='header'>
      <div style={{ float: 'right', height: '95px !important' }}>
        <div style={{ display: 'flex', }}>
          <button className='timer-area' style={{ backgroundColor: 'gray' }}>{timeCount < 0 ? '60' : timeCount}</button>
          <button onClick={(e) => startTyping(e)}><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
          </button>
        </div>
      </div>
      <h2 className='h2-header'>Typeed</h2>
      <div>Use The Typeed to increase your keyboard typing speed.</div>
    </div>
  );
}

export default Header;