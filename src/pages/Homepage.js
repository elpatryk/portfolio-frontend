import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/thunks";
import { Button } from "../styled";

export const Homepage = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectUser);

  return (
    <div>
      <div>
        {!profile ? (
          "loading"
        ) : (
          <div className="player-card">
            <img src={profile.imgUrl} alt="not found" width="200px" />
            <div className="">
              {" "}
              <div> {profile.firstName}</div>
              <div> {profile.lastName} </div>
              <div> {profile.birthday}</div>
              <div>
                {" "}
                Team: {profile.team.name}{" "}
                <img className="icon-logo" src={profile.team.logo} alt="" />
              </div>
            </div>
            <Button>Edit Your Profile</Button>
          </div>
        )}
      </div>
    </div>
  );
};
