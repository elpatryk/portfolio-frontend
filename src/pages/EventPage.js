import React, { useEffect, useState } from "react";
import { Button, Input } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { selectEvent } from "../store/events/selectors";
import {
  getEvents,
  postEvent,
  postEventParticipations,
} from "../store/events/thunks";
import { Link } from "react-router-dom";

export default function EventPage() {
  const dispatch = useDispatch();
  const event = useSelector(selectEvent);

  const [description, setDescription] = useState();
  const [pitchId, setPitchId] = useState();
  const [capacity, setCapacity] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(postEvent(description, pitchId, capacity));
  };
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const onClickJoin = (eventId) => {
    dispatch(postEventParticipations(eventId));
  };

  return (
    <div>
      Available events:
      {!event
        ? "loading"
        : event.map((e) => {
            return (
              <div className="events">
                {" "}
                <Button onClick={() => onClickJoin(e.id)}>Join to Event</Button>
                <Link to={`/events/${e.id}`}>
                  <div className="events" key={e.id}>
                    {e.description}
                  </div>{" "}
                </Link>
              </div>
            );
          })}
      <Button>New event?</Button>
      <form onSubmit={submitForm}>
        <Input
          placeholder="title for event"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="number"
          placeholder="on which pitch you wanna play?"
          value={pitchId}
          onChange={(e) => setPitchId(e.target.value)}
        />{" "}
        <Input
          type="number"
          placeholder="how many teams you want in this event?"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <br />
        <Button type="submit">Create new Event</Button>
      </form>
    </div>
  );
}
