import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../styled";
import { sendResult } from "../store/events/thunks";
import "../pages/index.css";
const MatchesCard = ({ match }) => {
  const dispatch = useDispatch();

  console.log("match", match);

  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  return (
    <div>
      {match.winnerId ? (
        <div className="events1">
          <div>
            <strong>
              {match.team_A.name}
              <img src={match.team_A.logo} alt="" width="30px" />
              {"    "}
              {match.teamAScore} : {match.teamBScore}
              {"   "}
              <img src={match.team_B.logo} alt="" width="30px" />
              {match.team_B.name}{" "}
            </strong>
          </div>
        </div>
      ) : (
        <div className="events1">
          <strong>
            {match.team_A.name}{" "}
            <input
              className="input"
              value={teamAScore}
              onChange={(event) => setTeamAScore(event.target.value)}
              type="number"
            />{" "}
            -{" "}
            <input
              className="input "
              value={teamBScore}
              onChange={(event) => setTeamBScore(event.target.value)}
              type="number"
            />{" "}
            {match.team_B.name}{" "}
          </strong>
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
