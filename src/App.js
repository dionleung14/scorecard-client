import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import PlayByPlay from "./pages/PlayByPlay";
import SearchPastGames from "./pages/SearchPastGames/SearchPastGames";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todays-schedule" element={<Home />} />
        <Route path="/current-games" element={<Home />} />
        <Route path="/game-lookup" element={<SearchPastGames />} />
        <Route path="/pbp" element={<PlayByPlay />} />
      </Routes>
    </Router>
  );
}

export default App;
