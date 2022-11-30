import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectByIdEvent } from "../store/events/selectors";
import { eventById } from "../store/events/thunks";
import { Title } from "../styled";

export default function EventsDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const eventDetails = useSelector(selectByIdEvent);

  useEffect(() => {
    dispatch(eventById(`${params.id}`));
  }, [dispatch, params.id]);
  return (
    <div>
      <div>
        {!eventDetails
          ? "loading"
          : eventDetails.teams.map((t) => {
              return (
                <div key={t.id}>
                  {t.name}{" "}
                  <div>
                    {" "}
                    <img src={t.logo} alt="not found" width="100px" />{" "}
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
