// This page displays all games scheduled to be played today
// TODO: investigate if this can be used for a specific date search
import React, { useState, useEffect } from "react";
import Game from "../components/Game";
import GamesContainer from "../components/GamesContainer";
import { getSavedSampleGames } from "../../../routes";
import "../scheduling.css";

export default function SavedSchedule() {
  const [displayGames, setDisplayGames] = useState([]); // stateful array of games played today
  const [isFetchingGames, setIsFetchingGames] = useState(true); // stateful boolean for fetching games

  // get games scheduled to play today
  // local server will get games scheduled on 4/21/2021
  const loadGames = async () => {
    let now = new Date(Date.now());
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let today = {
      day,
      month,
      year,
    };
    let schedule = await getSavedSampleGames(today);
    setDisplayGames(schedule);
    setIsFetchingGames(false);
  };

  // load games on page load after 1 second
  // TODO: investigate why this runs twice
  // useEffect(() => {
  //   setTimeout(() => {
  //     loadGames();
  //   }, 1000);
  // }, []);

  return (
    <div>
      <h3>Sample Games</h3>
      {displayGames.length <= 0 ? (
        <button onClick={loadGames}>Retrieve sample games</button>
      ) : null}
      {displayGames.length > 0 && isFetchingGames === false ? (
        <GamesContainer>
          {displayGames.map(game => {
            return <Game game={game} key={game.gameId} saved="true" />;
          })}
        </GamesContainer>
      ) : isFetchingGames === false ? (
        <h1>Loading sample games...</h1>
      ) : null}
      {/* need additional conditionals to display this, like is this being accessed during off season? */}
      {isFetchingGames === false && !displayGames ? (
        <h1>Something went wrong, try reloading the page?</h1>
      ) : null}
    </div>
  );
}
