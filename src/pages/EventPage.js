import React, { useEffect } from "react";
import { Button } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { selectEvent } from "../store/events/selectors";
import { getEvents } from "../store/events/thunks";
import { Link } from "react-router-dom";
export default function EventPage() {
  const dispatch = useDispatch();
  const event = useSelector(selectEvent);
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <div>
      Available events:
      {!event
        ? "loading"
        : event.map((e) => {
            return (
              <Link to={`/events/${e.id}`}>
                <Button key={e.id}>{e.description} </Button>{" "}
              </Link>
            );
          })}
    </div>
  );
}
