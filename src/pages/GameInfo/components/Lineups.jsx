// Starting lineups
// Could use this as a base for the live lineups (live) or scorecard lineups (generated from past game)
import React, { useState } from "react";
import LineupsRow from "./LineupsRow";

export default function Lineups(props) {
  const [startingPitcher, setStartingPitcher] = useState(
    props.lineup.lineup.filter(lineup => {
      return lineup.positionNumber === 1;
    })[0]
  );

  // const [startingPitcher, setStartingPitcher] =
  // props.lineup && props.lineup.lineup && props.lineup.lineup.length === 10
  //   ? useState(props.lineup.lineup[0])
  //   : props.lineup && props.lineup.lineup && props.lineup.lineup.length === 9
  //   ? useState(
  //       props.lineup.lineup.filter(lineup => {
  //         return lineup.positionNumber === 1;
  //       })
  //     )
  //   : null;

  // const [batters, setBatters] = useState(props.lineup.lineup.slice(1, 10));
  const [batters, setBatters] = useState(props.lineup.lineup);
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
            ? batters.length === 9
              ? batters.map(player => {
                  return <LineupsRow player={player} />;
                })
              : batters.length === 10
              ? batters.slice(1, 10).map(player => {
                  return <LineupsRow player={player} />;
                })
              : null
            : null}
          {/* Pitchers at the end at index 0 
          not necessarily if game is before universal DH*/}

          {batters && batters.length === 10 ? (
            <LineupsRow player={startingPitcher} />
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
