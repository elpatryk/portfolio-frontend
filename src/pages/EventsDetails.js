import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MatchesCard from "../components/MatchesCard";
import { selectByIdEvent, selectMatches } from "../store/events/selectors";
import { eventById, getMatches, generateMatches } from "../store/events/thunks";
import { Button } from "../styled";

export default function EventsDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const eventDetails = useSelector(selectByIdEvent);
  const matches = useSelector(selectMatches);
  useEffect(() => {
    dispatch(eventById(`${params.id}`));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(getMatches(`${params.id}`));
  }, [dispatch, params.id]);

  const onClickGenerate = (eventId) => {
    dispatch(generateMatches(eventId));
  };

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
        <Button onClick={() => onClickGenerate(eventDetails.id)}>
          Generate 1 round
        </Button>
        <div>
          {!matches
            ? "loading"
            : matches.map((match) => (
                <MatchesCard key={match.id} match={match} />
              ))}
          {!matches
            ? "loading"
            : matches.every((match) => match.winnerId) && (
                <Button>Generate Next Round</Button>
              )}
        </div>
      </div>
    </div>
  );
}
