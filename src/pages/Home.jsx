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
  const [ count, setCount ] = useState(0);
  const [ displayGames, setDisplayGames ] = useState([]);
  const defFunc = () => {
    fetch("/scorecards/home").then(async response => {
      console.log("maybe?");
      let test = await response.text();
      console.log(test);
    });
  };

  async function testMe () {
    let games = await getSeasonGamesForATeam()
    // console.log(games.slice(0,5))
    setDisplayGames(games)
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
        {/* <button onClick={() => setDisplayGames(getSeasonGamesForATeam)}> */}
        <button onClick={testMe}>Season games for a team</button>
      </div>
      <div>
        <button onClick={getStartingLineupForAGame}>Starting lineups</button>
        <button onClick={getPBPForAGame}>Play by play</button>
      </div>
      {displayGames.length > 0 ? displayGames.map(game => {
        return <Game game={game} key={game.id}/>
      }) : <h1>no games in state</h1>}
    </div>
  );
}
