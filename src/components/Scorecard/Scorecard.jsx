import React from "react";
import ScoringRow from "./components/ScoringRow";
// import ScoringCell from "./components/ScoringCell";

export default function Scorecard({ pbp, lineups }) {
  let homeBatters = lineups.homeTeam.slice(1, lineups.length);
  let awayBatters = lineups.awayTeam.slice(1, lineups.length);
  return (
    <div>
      <table>
        <tr>
          {/* jersey number */}
          <th></th>
          {/* name */}
          <th></th>
          {/* position */}
          <th></th>
          {pbp.map((inning, index) => {
            return <th key={index}>{inning.number}</th>;
          })}
        </tr>
        {awayBatters.map(player => {
          return <ScoringRow key={player.playerId} player={player} pbp={pbp}/>;
        })}
      </table>
      <h2>------------------------------</h2>
      <table>
        <tr>
          {/* jersey number */}
          <th></th>
          {/* name */}
          <th></th>
          {/* position */}
          <th></th>
          {pbp.map((inning, index) => {
            return <th key={index}>{inning.number}</th>;
          })}
        </tr>
        {homeBatters.map(player => {
          return <ScoringRow key={player.playerId} player={player} pbp={pbp}/>;
        })}
      </table>
    </div>
  );
}
