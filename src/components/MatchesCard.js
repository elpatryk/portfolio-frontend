import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../styled";
import { sendResult } from "../store/events/thunks";

const MatchesCard = ({ match }) => {
  const dispatch = useDispatch();

  console.log("match", match);

  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  return (
    <div>
      {match.winnerId ? (
        <table>
          <tr>
            <th>Team A</th>
            <th></th>
            <th></th>
            <th>Team B</th>
            <th></th>
          </tr>
          <tr>
            <th>{match.team_A.name}</th>
            <th>{match.teamAScore} : </th>
            <th>{match.teamBScore}</th>
            <th>{match.team_B.name}</th>
          </tr>
        </table>
      ) : (
        <div>
          <input
            value={teamAScore}
            onChange={(event) => setTeamAScore(event.target.value)}
            type="number"
          />{" "}
          -{" "}
          <input
            value={teamBScore}
            onChange={(event) => setTeamBScore(event.target.value)}
            type="number"
          />{" "}
          {match.team_B.name}{" "}
          <div>
            <Button
              onClick={() =>
                dispatch(
                  sendResult(
                    match.id,
                    parseInt(teamAScore),
                    parseInt(teamBScore)
                  )
                )
              }
            >
              Send result
            </Button>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchesCard;
