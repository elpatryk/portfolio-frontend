import React, { useEffect, useState } from "react";
import { Button, Input } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { selectEvent } from "../store/events/selectors";
import {
  getEvents,
  getMatches,
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
              <div className="events11">
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
    </div>
  );
}
