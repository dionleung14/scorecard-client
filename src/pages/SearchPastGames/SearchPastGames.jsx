import React, { useState } from "react";
import Game from "../../components/Game/Game";
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import { getSeasonGamesForATeam } from "../../routes/sportradar";
import teams from "../../data/teams";

export default function SearchPastGames() {
  const [displayGames, setDisplayGames] = useState([]); // array to hold games from results
  const [searchPending, setSearchPending] = useState(false); // search pending flag for loading or nah

  // copy of drop down form that updates when search completes so it can be displayed
  const [displaySearchTerms, setDisplaySearchTerms] = useState({
    year: null,
    team: null,
    type: null,
  });

  // search completed string
  const [searchString, setSearchString] = useState("");

  // search form
  const [formAllGamesInSzn, setFormAllGamesInSzn] = useState({
    year: null,
    team: null,
    type: null,
  });

  const handleChangeAllGamesInSzn = event => {
    setFormAllGamesInSzn({
      ...formAllGamesInSzn,
      [event.target.name]: event.target.value,
    });
  };

  const submission = async event => {
    event.preventDefault();
    if (
      formAllGamesInSzn.year !== null &&
      formAllGamesInSzn.type !== null &&
      formAllGamesInSzn.team !== null
    ) {
      setSearchPending(true); // toggle search flag
      let games = await getSeasonGamesForATeam(formAllGamesInSzn); // fetch games
      setDisplayGames(games); // displays games for a given team in a given year
      setDisplaySearchTerms({
        // set the display results graphic
        ...displaySearchTerms,
        year: formAllGamesInSzn.year,
        team: formAllGamesInSzn.team,
        type: formAllGamesInSzn.type,
      });
      setSearchPending(false); // toggle search flag
      generateSearchResultsString(formAllGamesInSzn)
    } else {
      window.alert("Please fill out the form completely"); // alert user to fill out form
    }
  };

  const clearForm = () => { // clear out the stateful form
    setFormAllGamesInSzn({
      year: null,
      team: null,
      type: null,
    });
  };

  const generateSearchResultsString = (formObj) => {
    const {year, team, type} = formObj
    let disp = `Search results for the ${year} ${team} ${type}`
    console.log(disp)
  }

  return (
    <div>
      <h1>Search past games</h1>
      <form onSubmit={submission} onReset={clearForm}>
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
        <input type="submit" value="Search" />
        {formAllGamesInSzn.year ||
        formAllGamesInSzn.team ||
        formAllGamesInSzn.type ? (
          <input type="reset" value="Reset form" />
        ) : null}
      </form>
      {searchPending ? (
        <h5>Searching</h5>
      ) : !searchPending && displayGames.length > 0 ? (
        <h5>
          Results for the {displaySearchTerms.year} {displaySearchTerms.team}{" "}
          {displaySearchTerms.type} ({displayGames.length} games)
        </h5>
      ) : null}
      {displayGames.length > 0 ? (
        <div>
          <GamesContainer>
            {displayGames.map(game => {
              return <Game game={game} key={game.id} />;
            })}
          </GamesContainer>
        </div>
      ) : (
        <h1>Search for games using dropdowns</h1>
      )}
    </div>
  );
}
