import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsGameOver, selectWordsCount } from '../redux/typingSlice';

function GameOver() {
  const count = useSelector(selectWordsCount);
  const isGameOver = useSelector(selectIsGameOver);
  return (
    <>

      {isGameOver &&
        <div className='game-over'>
          <div className="card">
            <div className="imgBx">
              <h2>Typing Is Over</h2>
              <div className='congratulations'>Congratulations</div>
              <div className='your-score'>Your Score</div>
              <div className='score'> {count.trueWordsCount}</div>
              <div className='wpm'>WPM</div>
              <div className='wpm-1'>(Word Per Minute)</div>
              <div className='score-info'>
                <div><span className='info-name'>Key Stroke:</span> <span>({count.totalCharCount} - <span style={{ color: 'red' }}>{count.totalWrongCharCount}</span>)</span> {count.totalCharCount + count.totalWrongCharCount}</div>
                <div><span className='info-name'>Accuracy:</span> 55%</div>
                <div><span className='info-name'>Correct Words:</span> {count.trueWordsCount}</div>
                <div><span className='info-name'>Wrong Words:</span> {count.totalWrongCharCount}</div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default GameOver;

/* 
Sonuç Ekran Görüntüsü
58 DKS (kelime yazabiliyorum)
Tuş Vuruşu	(292 | 0) 292
Doğruluk	98.98%
Doğru kelime	50
Yanlış kelime	0
*/