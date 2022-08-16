import React from 'react';
import { useSelector } from 'react-redux';
import { selectWordsCount } from '../redux/typingSlice';

function GameOver() {
    const count = useSelector(selectWordsCount);
  return (
    <div className='game-over'>
        <h5>Typing Is Over - Congratulations</h5>
        <div className='game-over-left'>
            <div>Wirtten Words</div>
            <div>{count.trueWordsCount + count.falseWordsCount}</div>
        </div>
        {/* <h3>Typing Is Over - Congratulations</h3>
        Total Writen Words: {count.trueWordsCount + count.falseWordsCount} True Words: { count.trueWordsCount } Wrong Words: { count.falseWordsCount } Total Pressed Key: { count.totalCharCount + count.totalWrongCharCount} True Pressed Key: { count.totalCharCount } Wrong Pressed Key: { CharacterData.totalWrongCharCount } Writing Speed: { count.trueWordsCount + count.falseWordsCount } Words In Min */}
    </div>
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