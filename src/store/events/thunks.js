import { fireEvent } from "@testing-library/react";
import axios from "axios";
import { appDoneLoading, appLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { allEvents, receivedMatches, specificEvent } from "./slice";

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

export const postEvent = (description, pitchId, capacity) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;

    try {
      const response = await axios.post(
        `${apiUrl}/events/new`,
        { description, pitchId, capacity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("thunk postEvent ", response);
      dispatch(showMessageWithTimeout("succes", false, "New event!", 1500));
    } catch (error) {
      if (error.response) {
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
    }
  };
};

export const postEventParticipations = (eventId) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      const response = await axios.post(
        `${apiUrl}/events/join`,
        { eventId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("eventParticipation thunk: ", response);
      dispatch(
        showMessageWithTimeout(
          "succes",
          false,
          "Good luck in your new event!",
          1500
        )
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const generateMatches = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${apiUrl}/events/${id}/start`);
      console.log("Post matches: ", response.data);
      //   dispatch(firstRound(response.data));
      dispatch(getMatches(id));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getMatches = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}/events/matches/${id}`);
      console.log("get matches", response);
      dispatch(receivedMatches(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
