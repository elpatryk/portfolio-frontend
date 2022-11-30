import axios from "axios";
import { allPitches } from "./slice";

const apiUrl = "http://localhost:4000";

export const getPitches = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/pitches`);
    console.log("getPitches thunk: ", response.data);
    dispatch(allPitches(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
