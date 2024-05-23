import "./App.css";
import { Home, About } from "./pages/Other/";
import { SeasonSchedule, TodaysSchedule } from "./pages/Scheduling/index.js";
import GameInfo from "./pages/GameInfo/GameInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

// Not sure if this is best practice but I use App.js essentially as a router
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todays-schedule" element={<TodaysSchedule />} />
          <Route path="/game-lookup" element={<SeasonSchedule />} />
          <Route path="/game-info-:gameId" element={<GameInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Home />} /> {/* 404 handler */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
