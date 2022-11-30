import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { teamDetails, userProfile } from "../store/teams/selectors";
import { teamById } from "../store/teams/thunks";

export default function TeamPage() {
  const dispatch = useDispatch();

  const user = useSelector(userProfile);
  const team = useSelector(teamDetails);

  //   console.log("your team", yourTeam);

  useEffect(() => {
    dispatch(teamById(user?.teamId));
  }, [user]);

  return (
    <div>
      {team && (
        <div>
          <div className="product">
            <img src={team.logo} alt="not found" width="50px" />
            <p> {team.name}</p>{" "}
          </div>

          {team.users.map((team) => {
            return (
              <div key={team.id} className="player">
                <li>
                  {team.firstName} {team.lastName}
                </li>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
