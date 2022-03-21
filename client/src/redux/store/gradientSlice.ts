import { createSlice } from '@reduxjs/toolkit';
import randomColour from '../../helpers/utils';

const gradientInitialState = {
  gradient: {
    style: 'linear-gradient',
    direction: 'to left top',
    colours: [`#${randomColour()}`, `#${randomColour()}`],
    outputFormat: 'hex',
  },
};

const gradientSlice = createSlice({
  name: 'gradient',
  initialState: gradientInitialState,
  reducers: {
    setStyle(state, action) {
      state.gradient.style = action.payload;
    },
    setDirection(state, action) {
      state.gradient.direction = action.payload;
    },
    setColours(state, action) {
      state.gradient.colours = action.payload;
    },
    setOutputFormat(state, action) {
      state.gradient.outputFormat = action.payload;
    },
  },
});

export const gradientActions = gradientSlice.actions;

export default gradientSlice.reducer;
