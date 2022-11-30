import axios from "axios";
import { allEvents, specificEvent } from "./slice";

const apiUrl = "http://localhost:4000";

export const getEvents = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/events`);
    console.log("getEvents thunk: ", response.data);
    dispatch(allEvents(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const eventById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/events/${id}`);
      console.log("Thunk eventbyId", response);
      dispatch(specificEvent(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
