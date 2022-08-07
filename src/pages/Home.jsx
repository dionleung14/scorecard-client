import React, { useState } from "react";
import {
  getSingleGameBoxscore,
  // getAllGamesInASeason,
  getSeasonGamesForATeam,
  getStartingLineupForAGame,
  getPBPForAGame,
} from "../routes/sportradar";
import Game from "../components/Game/Game";

export default function Home() {
  const [displayGames, setDisplayGames] = useState([]);
  const [inputText, setInputText] = useState("");
  const [formAllGamesInSzn, setFormAllGamesInSzn] = useState({
    year: "",
    type: null,
  });
  const defFunc = () => {
    fetch("/scorecards/home").then(async response => {
      console.log("maybe?");
      let test = await response.text();
      console.log(test);
    });
  };

  const showGames = async () => {
    let games = await getSeasonGamesForATeam();
    setDisplayGames(games);
  };

  // const submission = async event => {
  //   event.preventDefault();
  //   if (formAllGamesInSzn.year !== "" && formAllGamesInSzn.type !== null) {
  //     console.log("hit");
  //     // let games = await getAllGamesInASeason(formAllGamesInSzn);
  //     // console.log("hitta")
  //     // console.log(games.length)
  //     setDisplayGames(JSON.parse(getAllGamesInASeason(formAllGamesInSzn)));
  //   } else {
  //     let games = await getAllGamesInASeason({ year: null, type: null });
  //     setDisplayGames(JSON.parse(getAllGamesInASeason(formAllGamesInSzn)));
  //     console.log("gotta fill out the form");
  //   }
  // };

  const handleChangeAllGamesInSzn = async event => {
    // console.log(event)
    await setFormAllGamesInSzn({
      ...formAllGamesInSzn,
      [event.target.name]: event.target.value,
    });
    console.log(formAllGamesInSzn);
    // console.log(event.target.name)
    // console.log(event.target.value)
    // setInputText(event.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={defFunc}>Click me</button>
        <button onClick={getSingleGameBoxscore}>Single game box score</button>
      </div>
      <div>
        {/* <button onClick={getAllGamesInASeason}>All games in a season</button> */}
        <button onClick={showGames}>
          {/* <button onClick={testMe}>Season games for a team */}
          Season games for a team
        </button>
      </div>
      <div>
        <button onClick={getStartingLineupForAGame}>Starting lineups</button>
        <button onClick={getPBPForAGame}>Play by play</button>
      </div>
      {displayGames.length > 0 ? (
        displayGames.map(game => {
          return <Game game={game} key={game.id} />;
        })
      ) : (
        <h1>no games in state</h1>
      )}

      {/* <h3>Find all games in a season</h3>
      <form onSubmit={submission}>
        <select
          name="year"
          id="year"
          defaultValue="Choose season year"
          onChange={handleChangeAllGamesInSzn}>
          <option disabled>Choose season year</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
        <select
          name="type"
          id="type"
          defaultValue="Choose season type"
          onChange={handleChangeAllGamesInSzn}>
          <option disabled>Choose season type</option>
          <option value="PRE">Preseason</option>
          <option value="REG">Regular season</option>
          <option value="PST">Postseason</option>
        </select>
        <input type="submit" value="no" />
      </form> */}
    </div>
  );
}
