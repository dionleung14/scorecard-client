// This page displays all games scheduled to be played today
// TODO: investigate if this can be used for a specific date search
import React, { useState, useEffect } from "react";
import Game from "../components/Game";
import GamesContainer from "../components/GamesContainer";
import { getGamesInADay } from "../../../routes";
import "../scheduling.css";

export default function TodaysSchedule() {
  const [displayGames, setDisplayGames] = useState([]); // stateful array of games played today
  const [isFetchingGames, setIsFetchingGames] = useState(true); // stateful boolean for fetching games
  const [isError, setIsError] = useState(false); // stateful boolean for tracking errors

  const now = new Date(Date.now());
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const today = {
    day,
    month,
    year,
  };

  // get games scheduled to play today
  // local server will get games scheduled on 4/21/2021
  const loadGames = async () => {
    try {
      console.log("loading games in a day");
      let schedule = await getGamesInADay(today);
      console.log("getGamesInADay succeeded... in a way");
      console.log(schedule);
      if (schedule) {
        setDisplayGames(schedule);
        setIsFetchingGames(false);
      } else {
        setIsFetchingGames(false);
        setIsError(true);
      }
    } catch (err) {
      console.log("catching an error from the frontend utility");
      console.log(err);
      setIsError(true);
    }
  };

  // load games on page load after 1 second
  // TODO: investigate why this runs twice
  useEffect(() => {
    setTimeout(() => {
      loadGames();
    }, 1000);
  });

  return (
    <div>
      <h3>Today's Schedule - {dateFormatter(day, month, year)}</h3>
      {displayGames.length > 0 && isFetchingGames === false ? (
        <GamesContainer>
          {displayGames.map(game => {
            return <Game game={game} key={game.gameId} />;
          })}
        </GamesContainer>
      ) : (
        <h1>Loading today's games...</h1>
      )}
      {/* need additional conditionals to display this, like is this being accessed during off season? */}
      {isFetchingGames === false && isError ? (
        <h1>Something went wrong, try reloading the page?</h1>
      ) : null}
    </div>
  );
}

const dateFormatter = (day, month, year) => {
  return `${month}/${day}/${year}`;
};
