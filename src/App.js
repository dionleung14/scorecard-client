import "./App.css";
import Home from "./pages/Home";
import TodaysSchedule from "./pages/TodaysSchedule/TodaysSchedule";
import PlayByPlay from "./pages/PlayByPlay";
import About from "./pages/About";
import GameInfo from "./pages/GameInfo/GameInfo";
import SearchPastGames from "./pages/SearchPastGames/SearchPastGames";
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
          <Route path="/game-lookup" element={<SearchPastGames />} />
          <Route path="/game-info-:gameId" element={<GameInfo />} />
          <Route path="/pbp" element={<PlayByPlay />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Home />} /> {/* 404 handler */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
