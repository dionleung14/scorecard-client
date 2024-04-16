// This page retrieves past games in a season filtered by team
import React, { useState } from "react";
import Game from "../../components/Game/Game";
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import { getSeasonGamesForATeam } from "../../routes/sportradar";
import teams from "../../data/teams";
import SelectionYearsRange from "./components/SelectionYearsRange";
import SearchForm from "./components/SearchForm";
import { generateSearchResultsString } from "../../services/schedule/scheduleUtil";

export default function SearchPastGames() {
  const [displayGames, setDisplayGames] = useState([]); // array to hold games from results
  const [searchPending, setSearchPending] = useState(false); // search pending flag for loading or nah
  const [errorLoading, setErrorLoading] = useState(false); // error message

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
      if (games !== null && games.length > 0) {
        setDisplayGames(games); // displays games for a given team in a given year
      } else {
        setSearchPending(false); // toggle search flag
        setErrorLoading(true);
      }
      setDisplaySearchTerms({
        // set the display results graphic/text
        ...displaySearchTerms,
        year: formAllGamesInSzn.year,
        team: formAllGamesInSzn.team,
        type: formAllGamesInSzn.type,
      });
      setSearchPending(false); // toggle search flag
      setSearchString(generateSearchResultsString(formAllGamesInSzn));
      // TODO: debug this so that all star game searches don't need the team
      // } else if (
      //   formAllGamesInSzn.year !== null &&
      //   formAllGamesInSzn.type === "AST"
      // ) {
      //   setSearchPending(true); // toggle search flag
      //   let games = await getSeasonGamesForATeam(formAllGamesInSzn); // fetch games
      //   if (games !== null && games.length > 0) {
      //     setDisplayGames(games); // displays games for a given team in a given year
      //   } else {
      //     setSearchPending(false); // toggle search flag
      //     setErrorLoading(true);
      //   }
      //   setDisplaySearchTerms({
      //     // set the display results graphic/text
      //     ...displaySearchTerms,
      //     year: formAllGamesInSzn.year,
      //     team: formAllGamesInSzn.team,
      //     type: formAllGamesInSzn.type,
      //   });
      //   setSearchPending(false); // toggle search flag
      //   generateSearchResultsString(formAllGamesInSzn);
    } else {
      window.alert("Please fill out the form completely"); // alert user to fill out form
    }
  };

  // clear out the stateful form
  const clearForm = () => {
    setFormAllGamesInSzn({
      year: null,
      team: null,
      type: null,
    });
  };

  const clearSearchResults = () => {
    setDisplayGames([]);
  };

  // const searchForAllStarGame = () => {

  // }

  return (
    <div>
      <h1>Search past games</h1>
      <SearchForm
        onSubmit={submission}
        onReset={clearForm}
        onChange={handleChangeAllGamesInSzn}
        statefulForm={formAllGamesInSzn}
      />
      {errorLoading ? (
        <h3>Error: please contact dioncleung@gmail.com for more information</h3>
      ) : null}
      {searchPending ? (
        <h5>Searching</h5>
      ) : !searchPending && displayGames.length > 0 ? (
        <h5>
          {searchString} ({displayGames.length} games):{" "}
          <button onClick={clearSearchResults}>Clear results</button>
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
