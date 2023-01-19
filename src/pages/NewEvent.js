import React, { useEffect, useState } from "react";
import { Button } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectByIdEvent, selectMatches } from "../store/events/selectors";
import {
  eventById,
  generateMatches,
  getMatches,
  postEvent,
} from "../store/events/thunks";
import { Input } from "../styled";
import { Select } from "@mui/material";

export default function NewEvent() {
  const params = useParams();
  const dispatch = useDispatch();
  const eventDetails = useSelector(selectByIdEvent);
  const matches = useSelector(selectMatches);
  const [round, setRound] = useState(2);

  const [description, setDescription] = useState();
  const [pitchId, setPitchId] = useState();
  const [capacity, setCapacity] = useState();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(postEvent(description, pitchId, capacity));
  };
  useEffect(() => {
    dispatch(eventById(`${params.id}`));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(getMatches(`${params.id}`));
  }, [dispatch, params.id]);

  return (
    <div className="events">
      {" "}
      <form onSubmit={submitForm}>
        <Input
          placeholder="title for event"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <div class="custom-select" style={{ width: "200px" }}>
          <select value={pitchId} onChange={(e) => setPitchId(e.target.value)}>
            <option value="99">Select pitch</option>
            <option value="1">
              Sportpark Spieringhorn 10, 1043 AA Amsterdam
            </option>
            <option value="2">
              Amsterdam Football Club,Maurice Ravellaan 4, 1082 LC Amsterdam{" "}
            </option>
            <option value="3">
              Sportspark Olympiaplein, Olympiaplein, 1077 CL Amsterdam{" "}
            </option>
            <option value="4">
              Tweede Oosterparkstraat 254-E, 1092 BV Amsterdam
            </option>
            <option value="5">FC Urban, Amstel 95, 1018 EL Amsterdam</option>
          </select>
        </div>
        <div class="custom-select" style={{ width: "200px" }}>
          <select
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          >
            <option value="99">
              How many teams will participate in this event?
            </option>
            <option value="4">4</option>
            <option value="8">8</option>
          </select>
        </div>
        <br />
        <Button type="submit">Create new Event</Button>
      </form>
    </div>
  );
}
