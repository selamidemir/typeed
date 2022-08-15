import { createSlice } from "@reduxjs/toolkit";
import { getWords } from "../assets/words";


export const typingSlice = createSlice({
    name: 'typing',
    initialState: {
        words: getWords(),
        isTyping: false,
        isStarted: false,
        currentWord: '',
        writedWord: '',
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
                wordOne = state.words[Math.floor(Math.random() * state.words.length)];
                wordTwo = state.words[Math.floor(Math.random() * state.words.length)]
                state.lineOne.push({
                    index: i,
                    word: wordOne,
                    isOk: false,
                    isWrong: false,
                });
                state.lineTwo.push({
                    word: wordTwo,
                    isOk: false,
                    isWrong: false,
                });
            }
            state.currentWord = state.lineOne[0];
            state.currenWordIndex = 0;
        },
        setCurrentWord: (state, action) => {
            state.currentWord = action.payload;
        },
        setWritedWord: (state, action) => {
            state.writedWord = action.payload;
            state.lastWritedChar = action.payload.slice(action.payload.length-1, action.payload.length);
            state.lineOne[state.currenWordIndex].word.search(action.payload)===0 ? state.lineOne[state.currenWordIndex].isWrong = false : state.lineOne[state.currenWordIndex].isWrong = true;
        },
        setTimer: (state, action) => {
            state.timer = action.payload;
        },
        addCounter: (state, action) => {
            state.count += 1;
        },
        wordOver: (state, action) => {

        },
        setMissipelled: (state, action) => {
            state.isMisspelled = action.payload;
        }
    }
});

export const { setTyping, setStarted, setWritedWord, setTimer, wordOver, setMissipelled } = typingSlice.actions;

export const selectIsTyping = state => state.typing.isTyping;
export const selectIsStarted = state => state.typing.isStarted;
export const selectTimer = state => state.typing.timer;
export const selectWritedWord = state => state.typing.writedWord;
export const selectLineOne = state => state.typing.lineOne;
export const selectLineTwo = state => state.typing.lineTwo;
export const selectCurrentWordIndex = state => state.typing.currenWordIndex;
export const selectMissipelled = state => state.typing.isMisspelled;

export default typingSlice.reducer;