import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import pitchesReducer from "./pitches/slice";
import teamsReducer from "./teams/slice";
import eventReducer from "./events/slice";
export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    pitches: pitchesReducer,
    teams: teamsReducer,
    event: eventReducer,
  },
});
