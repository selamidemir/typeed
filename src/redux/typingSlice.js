import { createSlice } from "@reduxjs/toolkit";
import { getOneWord } from "../assets/words";


export const typingSlice = createSlice({
    name: 'typing',
    initialState: {
        // words: getWords(),
        isTyping: false,
        isStarted: false,
        currentWord: '',
        writtenWord: '',
        lastWritedChar: '',
        timer: null,
        charCount: 0,
        lineOne: [],
        lineTwo: [],
        currenWordIndex: null,
        isMisspelled: false,
    },
    reducers: {
        setTyping: (state, action) => {
            state.isTyping = action.payload;
        },
        setStarted: (state, action) => {
            state.isStarted = action.payload;
            state.lineOne = [];
            state.lineTwo = [];
            let wordOne = '';
            let wordTwo = '';
            for(let i=0; i<8; i++) {
                wordOne = getOneWord();
                wordTwo = getOneWord();
                state.lineOne.push({
                    index: i,
                    word: wordOne,
                    isOk: false,
                    isWrong: false,
                    color: '',
                    bgColor: '',
                });
                state.lineTwo.push({
                    index: i,
                    word: wordTwo,
                    isOk: false,
                    isWrong: false,
                    color: '',
                    bgColor: '',
                });
            }
            state.currentWord = state.lineOne[0];
            state.currentWord.bgColor = 'gray';
            state.currenWordIndex = 0;
        },
        setCurrentWord: (state, action) => {
            state.currentWord = action.payload;
        },
        setwrittenWord: (state, action) => {
            state.writtenWord = action.payload;
            state.lastWritedChar = action.payload.slice(action.payload.length-1, action.payload.length);
            if(state.lineOne[state.currenWordIndex].word.search(state.writtenWord) === 0) {
                state.lineOne[state.currenWordIndex].isWrong = false;
                state.lineOne[state.currenWordIndex].bgColor = 'gray';
            }
            else {
             state.lineOne[state.currenWordIndex].isWrong = true;
             state.lineOne[state.currenWordIndex].bgColor = 'red';
            }    
        },
        setTimer: (state, action) => {
            state.timer = action.payload;
        },
        addCounter: (state, action) => {
            state.count += 1;
        },
        setMissipelled: (state, action) => {
            state.isMisspelled = action.payload;
        },
        writtenWordOver: (state, action) => {
            if(state.currentWord.word === state.writtenWord) {
                state.lineOne[state.currenWordIndex].color = 'green';
                state.lineOne[state.currenWordIndex].bgColor = '';
            }
            else {
                state.lineOne[state.currenWordIndex].color = 'red';
                state.lineOne[state.currenWordIndex].bgColor = '';
            }
            state.lineOne[state.currenWordIndex].wrong = false;
            state.lineOne[state.currenWordIndex].bgColor = '';
            if(state.currenWordIndex < 7) {
                state.currenWordIndex += 1;
            } else {
                state.lineOne = [...state.lineTwo];
                state.lineTwo = [];
                for(let i=0; i<8; i++) state.lineTwo.push({
                    index: i,
                    word: getOneWord(),
                    isOk: false,
                    isWrong: false,
                    color: '',
                    bgColor: '',
                });
                state.currenWordIndex = 0;
            }
            state.currentWord = state.lineOne[state.currenWordIndex];
            state.lineOne[state.currenWordIndex].bgColor = 'gray';
            state.writtenWord = '';
        }
    }
});

export const { setTyping, setStarted, setwrittenWord, setTimer, setMissipelled, writtenWordOver } = typingSlice.actions;

export const selectIsTyping = state => state.typing.isTyping;
export const selectIsStarted = state => state.typing.isStarted;
export const selectTimer = state => state.typing.timer;
export const selectwrittenWord = state => state.typing.writtenWord;
export const selectLineOne = state => state.typing.lineOne;
export const selectLineTwo = state => state.typing.lineTwo;
export const selectCurrentWordIndex = state => state.typing.currenWordIndex;
export const selectMissipelled = state => state.typing.isMisspelled;

export default typingSlice.reducer;