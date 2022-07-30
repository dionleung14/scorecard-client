import React from "react";
import {
  getGamesInADay,
  getSingleGameBoxscore,
  getAllGamesInASeason,
  getSeasonGamesForATeam,
  getStartingLineupForAGame,
  getPBPForAGame,
} from "../routes/sportradar";

export default function Home() {
  const defFunc = () => {
    fetch("/scorecards/home").then(async response => {
      console.log("maybe?");
      let test = await response.text();
      console.log(test);
    });
  };

  return (
    <div>
      <div>
        <button onClick={defFunc}>Click me</button>
        <button onClick={getGamesInADay}>Games in a day</button>
        <button onClick={getSingleGameBoxscore}>Single game box score</button>
      </div>
      <div>
        <button onClick={getAllGamesInASeason}>All games in a season</button>
        <button onClick={getSeasonGamesForATeam}>
          Season games for a team
        </button>
      </div>
      <div>
        <button onClick={getStartingLineupForAGame}>Starting lineups</button>
        <button onClick={getPBPForAGame}>Play by play</button>
      </div>
    </div>
  );
}
