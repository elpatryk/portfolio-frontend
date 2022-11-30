import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pitches: null,
};

export const pitchesSlice = createSlice({
  name: "pitches",
  initialState,
  reducers: {
    allPitches: (state, action) => {
      state.pitches = action.payload;
    },
  },
});

export const { allPitches } = pitchesSlice.actions;

export default pitchesSlice.reducer;
