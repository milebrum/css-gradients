import { configureStore } from '@reduxjs/toolkit';
import gradientSliceReducer from './gradientSlice';

const store = configureStore({ reducer: { gradient: gradientSliceReducer } });

export default store;
