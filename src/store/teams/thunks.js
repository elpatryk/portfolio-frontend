import axios from "axios";
import { allTeams, specificTeam } from "./slice";

const apiUrl = "http://localhost:4000";

export const getTeams = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/teams`);
    console.log("getTeams thunk: ", response);
    dispatch(allTeams(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const teamById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/teams/${id}`);
      console.log("Thunk teambyId", response);
      dispatch(specificTeam(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
