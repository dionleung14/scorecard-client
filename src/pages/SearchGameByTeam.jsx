import React, {useState} from 'react'

export default function SearchGameByTeam() {
  const [searchMethodDisplay, setSearchMethodDisplay] = useState("none")

  return (
    <div>
      <h1>Search for a game</h1>
      How would you like to search for a game?
      <button onClick={() => setSearchMethodDisplay("season")}>By Season</button>
      <button onClick={() => setSearchMethodDisplay("team")}>By Team</button>
      {searchMethodDisplay === "season" ? <p>Season</p> : searchMethodDisplay === "team" ? <p>Team</p> : null}
    </div>
  )
}
