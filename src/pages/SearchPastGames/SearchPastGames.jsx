// This page retrieves past games in a season filtered by team 
// Using the back button after searching and clicking on a game clears the results
// Open the game in a new tab?
import React, { useState } from "react";
import Game from "../../components/Game/Game";
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import { getSeasonGamesForATeam } from "../../routes/sportradar";
import teams from "../../data/teams";
import SelectionYearsRange from "./components/SelectionYearsRange";

export default function SearchPastGames() {
  const [displayGames, setDisplayGames] = useState([]); // array to hold games from results
  const [searchPending, setSearchPending] = useState(false); // search pending flag for loading or nah

  // copy of drop down form that updates when search completes so it can be displayed in a string
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

  // form handler for the dropdowns
  const handleChangeAllGamesInSzn = event => {
    setFormAllGamesInSzn({
      ...formAllGamesInSzn,
      [event.target.name]: event.target.value,
    });
  };

  // submitting the form
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
        // set the display results graphic/text
        ...displaySearchTerms,
        year: formAllGamesInSzn.year,
        team: formAllGamesInSzn.team,
        type: formAllGamesInSzn.type,
      });
      setSearchPending(false); // toggle search flag
      generateSearchResultsString(formAllGamesInSzn);
    } else {
      window.alert("Please fill out the form completely"); // alert user to fill out form
    }
  };

  const getSavedData = async event => {
    event.preventDefault();
    if (
      formAllGamesInSzn.year !== null &&
      formAllGamesInSzn.type !== null &&
      formAllGamesInSzn.team !== null
    ) {
      setSearchPending(true); // toggle search flag
      let games = await getSeasonGamesForATeam({...formAllGamesInSzn, savedData: true}); // fetch games
      setDisplayGames(games); // displays games for a given team in a given year
      setDisplaySearchTerms({
        // set the display results graphic
        ...displaySearchTerms,
        year: formAllGamesInSzn.year,
        team: formAllGamesInSzn.team,
        type: formAllGamesInSzn.type,
      });
      setSearchPending(false); // toggle search flag
      generateSearchResultsString(formAllGamesInSzn);
    } else {
      window.alert("Please fill out the form completely"); // alert user to fill out form
    }
  }

  // clear out the stateful form
  const clearForm = () => {
    setFormAllGamesInSzn({
      year: null,
      team: null,
      type: null,
    });
  };

  // generates string to display on search results page and sets in state
  const generateSearchResultsString = formObj => {
    const { year, team, type } = formObj;
    let teamFinder = teams.filter(club => {
      return club.abbr === team;
    });
    let seasonType;
    if (type === "PRE") {
      seasonType = "Preseason";
    } else if (type === "PST") {
      seasonType = "Postseason";
    } else if (type === "REG") {
      seasonType = "Regular Season";
    }
    let disp = `Search results for the ${year} ${teamFinder[0].market} ${teamFinder[0].name} ${seasonType}`;
    setSearchString(disp);
  };

  return (
    <div>
      <h1>Search past games</h1>
      <form onSubmit={submission} onReset={clearForm}>
        <SelectionYearsRange
          startYear="2016"
          endYear="2022"
          handleChange={handleChangeAllGamesInSzn}
        />
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
        <button onClick={getSavedData}>Search from saved data</button>
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
          {searchString} ({displayGames.length} games):
        </h5>
      ) : null}
      {displayGames.length > 0 ? (
        <GamesContainer>
          {displayGames.map(game => {
            return <Game game={game} key={game.id} />;
          })}
        </GamesContainer>
      ) : null}
    </div>
  );
}
