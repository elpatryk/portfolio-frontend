import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/thunks";

export const Homepage = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectUser);

  return (
    <div>
      <div>
        {!profile ? (
          "loading"
        ) : (
          <div>
            <img src={profile.imgUrl} alt="not found" width="200px" />
            <p>First Name: {profile.firstName} </p>
            <p>Last name: {profile.lastName}</p>
            <p>Birthday: {profile.birthday}</p>
            <p>Team: {profile.team.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};
