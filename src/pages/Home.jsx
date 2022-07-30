import React, { useState } from "react";
import {
  getGamesInADay,
  getSingleGameBoxscore,
  getAllGamesInASeason,
  getSeasonGamesForATeam,
  getStartingLineupForAGame,
  getPBPForAGame,
} from "../routes/sportradar";
import Game from "../components/Game";

export default function Home() {
  const { count, setCount } = useState(0);
  const { displayGames, setDisplayGames } = useState(0);
  const defFunc = () => {
    fetch("/scorecards/home").then(async response => {
      console.log("maybe?");
      let test = await response.text();
      console.log(test);
    });
  };

  const testMe = async () => {
    console.log('me');
    let games = getSeasonGamesForATeam();
    console.log(games? games.length: "no")
  }

  return (
    <div>
      <div>
        <button onClick={defFunc}>Click me</button>
        <button onClick={getGamesInADay}>Games in a day</button>
        <button onClick={getSingleGameBoxscore}>Single game box score</button>
      </div>
      <div>
        <button onClick={getAllGamesInASeason}>All games in a season</button>
        {/* <button onClick={() => setDisplayGames(getSeasonGamesForATeam)}> */}
        <button onClick={testMe}>
          Season games for a team
        </button>
      </div>
      <div>
        <button onClick={getStartingLineupForAGame}>Starting lineups</button>
        <button onClick={getPBPForAGame}>Play by play</button>
      </div>
      {displayGames > 0 ? (
        <h1>got games</h1>
      ) : (
        <h1>no games in state</h1>
      )}
      <Game />
      {count}
    </div>
  );
}
