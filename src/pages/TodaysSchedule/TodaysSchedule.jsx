// This page should display all games scheduled to be played today
// Currently has to be triggered manually because of some error with useEffect()
import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import GameCurrent from "./components/GameCurrent";
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import { getGamesInADay } from "../../routes/sportradar";
import './todaysSchedule.css'

export default function TodaysSchedule() {
  const [displayGames, setDisplayGames] = useState([]);

  // get games scheduled to play today
  const loadGames = async () => {
    let now = new Date(Date.now());
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    let today = {
      day, month, year
    }
    let schedule = await getGamesInADay(today);
    setDisplayGames(schedule)
  };

  // get games on 4/21/21
  const loadGamesFromFile = async () => {
    let schedule = await getGamesInADay();
    setDisplayGames(schedule)
  };

  return (
    <div>
      <h3>Today's Schedule</h3>
      <button onClick={loadGames}>Load games today</button>
      <button onClick={loadGamesFromFile}>Load games from file (4/21/21)</button>
      {displayGames.length > 0 ? (
        <GamesContainer>
        {displayGames.map(game => {
          return <GameCurrent game={game} key={game.id} />;
        })}
        </GamesContainer>
      ) : (
        <h1>no games in state</h1>
      )}
    </div>
  );
}
