import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: null,
  details: null,
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
  },
});

export const { allEvents, specificEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
