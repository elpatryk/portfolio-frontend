import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPitch } from "../store/pitches/selectors";
import "./index.css";
import { getPitches } from "../store/pitches/thunks";
import Leaflet from "../components/Leaflet";

export default function PitchesPage() {
  const dispatch = useDispatch();
  const pitches = useSelector(selectPitch);
  useEffect(() => {
    dispatch(getPitches());
  }, [dispatch]);
  //   console.log(pitches);

  return (
    <div>
      {!pitches
        ? "loading"
        : pitches.map((pitch) => {
            return (
              <div key={pitch.id} className="product">
                <div className="card-body">
                  <h5>Pitch for {pitch.capacity} players</h5>
                  <h4>{pitch.adress}</h4>
                </div>

                <Leaflet
                  pitches={pitches}
                  longitude={pitch.longitude}
                  latitude={pitch.latitude}
                />
              </div>
            );
          })}
    </div>
  );
}
