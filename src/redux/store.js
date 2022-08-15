import { configureStore } from "@reduxjs/toolkit";
import TypingReducer from './typingSlice';

export const store = configureStore({
    reducer: {
        typing: TypingReducer,
    }
});