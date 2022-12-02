import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: null,
  details: null,
  matches: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    allEvents: (state, action) => {
      state.events = action.payload;
    },
    specificEvent: (state, action) => {
      console.log("specific event slice: ", action.payload);
      state.details = action.payload;
    },
    receivedMatches: (state, action) => {
      state.matches = action.payload;
    },
  },
});

export const { allEvents, specificEvent, receivedMatches } =
  eventsSlice.actions;

export default eventsSlice.reducer;
