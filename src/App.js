import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import TodaysSchedule from "./pages/TodaysSchedule";
import PlayByPlay from "./pages/PlayByPlay";
import GameInfo from "./pages/GameInfo/GameInfo";
import CurrentGames from "./pages/CurrentGames";
import SearchPastGames from "./pages/SearchPastGames/SearchPastGames";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todays-schedule" element={<TodaysSchedule />} />
          <Route path="/current-games" element={<CurrentGames />} />
          <Route path="/game-lookup" element={<SearchPastGames />} />
          <Route path="/game-info-:gameId" element={<GameInfo />} />
          <Route path="/pbp" element={<PlayByPlay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
