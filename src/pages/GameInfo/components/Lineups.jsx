// Starting lineups
// Could use this as a base for the live lineups (live) or scorecard lineups (generated from past game)
import React, { useState } from "react";
import LineupsRow from "./LineupsRow";

export default function Lineups(props) {
  const [startingPitcher, setStartingPitcher] = useState(
    props.lineup.lineup[0]
  );
  const [batters, setBatters] = useState(props.lineup.lineup.slice(1, 10));
  const [team, setTeam] = useState(props.lineup.team);
  if (!true) {
    // placeholder to "use" set (X) to avoid deployment bugs
    setStartingPitcher(true);
    setBatters(true);
    setTeam(true);
  }

  return (
    <div>
      <h2>{`${team.market} ${team.name}`} starting lineup</h2>
      <h2>{team.teamAbbr} starting lineup</h2>
      <table>
        <tbody>
          <tr>
            <th>Number</th>
            <th>Player</th>
            <th>Position</th>
          </tr>
          {batters.length > 1
            ? batters.map(player => {
                return <LineupsRow player={player} />;
              })
            : null}
          {/* Pitchers at the end at index 0 */}
          <LineupsRow player={startingPitcher} />
        </tbody>
      </table>
    </div>
  );
}
