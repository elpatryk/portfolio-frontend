import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: null,
  details: null,
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    allTeams: (state, action) => {
      console.log(action);
      state.teams = action.payload;
    },
    specificTeam: (state, action) => {
      console.log("specific team slice: ", action.payload);
      state.details = action.payload;
    },
  },
});

export const { allTeams, specificTeam } = teamsSlice.actions;

export default teamsSlice.reducer;
