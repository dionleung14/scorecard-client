import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import PlayByPlay from "./pages/PlayByPlay";
import SearchGameByTeam from "./pages/SearchGameByTeam";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-lookup" element={<SearchGameByTeam />} />
        <Route path="/pbp" element={<PlayByPlay />} />
      </Routes>
    </Router>
  );
}

export default App;
