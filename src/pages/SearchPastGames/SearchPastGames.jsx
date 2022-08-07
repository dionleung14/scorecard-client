import React, { useState } from "react";
import Game from "../../components/Game/Game";
import { getSeasonGamesForATeam } from "../../routes/sportradar";
import teams from "../../data/teams";

export default function SearchPastGames() {
  // const [searchMethodDisplay, setSearchMethodDisplay] = useState("none")
  const [displayGames, setDisplayGames] = useState([]);
  const [formAllGamesInSzn, setFormAllGamesInSzn] = useState({
    year: null,
    team: null,
    type: null,
  });

  const handleChangeAllGamesInSzn = event => {
    // console.log(event)
    setFormAllGamesInSzn({
      ...formAllGamesInSzn,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.name)
    // console.log(event.target.value)
    // setInputText(event.target.value);
  };

  const submission = async event => {
    event.preventDefault();
    if (
      formAllGamesInSzn.year !== null &&
      formAllGamesInSzn.type !== null &&
      formAllGamesInSzn.team !== null
    ) {
      console.log("hit");
      // let games = await getAllGamesInASeason(formAllGamesInSzn);
      // console.log("hitta")
      // console.log(games.length)
      let games = await getSeasonGamesForATeam(formAllGamesInSzn);
      // console.log(games[5])
      setDisplayGames(games);

      // setDisplayGames(JSON.parse(getAllGamesInASeason(formAllGamesInSzn)))
    } else {
      let games = await getSeasonGamesForATeam({ year: null, type: null });
      setDisplayGames(JSON.parse(getSeasonGamesForATeam(formAllGamesInSzn)));
      console.log("gotta fill out the form");
    }
  };

  return (
    <div>
      <h1>Search past games</h1>
      <form onSubmit={submission}>
        {/* <input type="text" name="test" onChange={handleChange} /> */}
        <select
          name="year"
          id="year"
          defaultValue="Choose season year"
          onChange={handleChangeAllGamesInSzn}>
          <option disabled>Choose season year</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
        <select
          name="team"
          id="team"
          defaultValue="Choose a team"
          onChange={handleChangeAllGamesInSzn}>
          <option disabled>Choose a team</option>
          {teams.map(team => {
            return (
              <option
                key={team.abbr}
                value={team.abbr}>{`${team.market} ${team.name}`}</option>
            );
          })}
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
        {/* <input type="date" name="calendar" onChange={handleChange} /> */}
        <input type="submit" value="Search" />
      </form>
      {/* <button onClick={() => setSearchMethodDisplay("season")}>By Season</button>
      <button onClick={() => setSearchMethodDisplay("team")}>By Team</button>
      {searchMethodDisplay === "season" ? <SearchBySeason /> : searchMethodDisplay === "team" ? <SearchByTeam /> : null} */}
      {displayGames.length > 0 ? (
        <div>
          <h5>
            Results for the {formAllGamesInSzn.year} {formAllGamesInSzn.team}{" "}
            {formAllGamesInSzn.type} ({displayGames.length} games)
          </h5>
          {displayGames.map(game => {
            return <Game game={game} key={game.id} />;
          })}
        </div>
      ) : (
        <h1>no games in state</h1>
      )}
    </div>
  );
}
