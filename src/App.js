import "./App.css";
import { Home, About } from "./pages/Other/";
import {
  SeasonSchedule,
  TodaysSchedule,
  SavedSchedule,
} from "./pages/Scheduling/index.js";
import GameInfo from "./pages/GameInfo/GameInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { FeedbackForm, Navigation } from "./components/";
import { Navigation } from "./components/";

// Not sure if this is best practice but I use App.js essentially as a router
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        {/* <FeedbackForm /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todays-schedule" element={<TodaysSchedule />} />
          <Route path="/game-lookup" element={<SeasonSchedule />} />
          <Route path="/sample-games" element={<SavedSchedule />} />
          <Route path="/game-info-:gameId" element={<GameInfo />} />
          <Route
            path="/game-info-sample/gameid/:gameId/sample/:saved"
            element={<GameInfo />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Home />} /> {/* 404 handler */}
        </Routes>
        {/* <Navigation /> // Footer? */}
      </div>
    </Router>
  );
}

export default App;
