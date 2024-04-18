import React from "react";

export default function SearchResultsString({
  searchResults,
  numberOfGames,
  clearSearchFunction,
}) {
  return (
    <h5>
      {searchResults} {numberOfGames} games):{" "}
      <button onClick={clearSearchFunction}>Clear results</button>
    </h5>
  );
}
