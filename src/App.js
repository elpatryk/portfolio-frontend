import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import { Homepage, Login, SignUp } from "./pages";
import { selectToken } from "./store/user/selectors";
import { useSelector } from "react-redux";
import FrontPage from "./pages/FrontPage";
import PitchesPage from "./pages/PitchesPage";
import TeamPage from "./pages/TeamPage";
import EventPage from "./pages/EventPage";
import EventsDetails from "./pages/EventsDetails";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      <Routes>
        {!token ? (
          <Route path="/" element={<FrontPage />} />
        ) : (
          <Route path="/" element={<Homepage />} />
        )}
        <Route path="/events/:id" element={<EventsDetails />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/teams" element={<TeamPage />} />
        <Route path="/pitches" element={<PitchesPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
