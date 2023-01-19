import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MatchesCard from "../components/MatchesCard";
import { selectByIdEvent, selectMatches } from "../store/events/selectors";
import {
  eventById,
  getMatches,
  generateMatches,
  generateNextRound,
} from "../store/events/thunks";
import { Button } from "../styled";

export default function EventsDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const eventDetails = useSelector(selectByIdEvent);
  const matches = useSelector(selectMatches);
  const [round, setRound] = useState(2);
  useEffect(() => {
    dispatch(eventById(`${params.id}`));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(getMatches(`${params.id}`));
  }, [dispatch, params.id]);

  const onClickGenerate = (eventId) => {
    dispatch(generateMatches(eventId));
  };
  console.log("Match", matches);
  let newMatches = [];
  if (matches) {
    newMatches = [...matches].sort((a, b) => b.id - a.id);
  }

  return (
    <div className="events">
      <div>
        {!eventDetails
          ? "loading"
          : eventDetails.teams.map((t) => {
              return (
                <div className="logo" key={t.id}>
                  {t.name}{" "}
                  <div>
                    {" "}
                    <img src={t.logo} alt="not found" width="100px" />{" "}
                  </div>
                </div>
              );
            })}{" "}
      </div>{" "}
      <div>
        <Button onClick={() => onClickGenerate(eventDetails.id)}>
          Generate 1 round
        </Button>
        <div>
          {!matches
            ? "loading"
            : newMatches.map((match) => (
                <MatchesCard key={match.id} match={match} />
              ))}
          {!matches
            ? "loading"
            : newMatches.every((match) => match.winnerId) && (
                <Button
                  onClick={() => dispatch(generateNextRound(eventDetails.id))}
                >
                  Generate {matches.round} Round
                </Button>
              )}
        </div>
      </div>
    </div>
  );
}
