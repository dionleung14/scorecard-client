// This file is the combined scorecard section in the GameInfo page

import React from "react";
// import PlayerColumns from "./components/PlayerColumns";
// import ScoringCell from "./components/ScoringCell";
import ScorecardRow from "./components/ScorecardRow";
// import ScoringRow from "./components/ScoringRow";

export default function CombinedScorecard({ pbp, teamPbp, lineups }) {
  let homeBatters = lineups.homeTeam.slice(1, lineups.length); // SP is always first player; extract batters with index 1 to the end
  let awayBatters = lineups.awayTeam.slice(1, lineups.length); // SP is always first player; extract batters with index 1 to the end
  return (
    <div className="scorecards">
      <h3>Away team</h3>
      <div className="away-scorecard">
        <table className="away-roster">
          <tbody>
            <tr className="player-columns-categories">
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
              return (
                <ScorecardRow
                  key={player.playerId}
                  player={player}
                  pbp={pbp}
                  teamPbp={teamPbp.awayInnings}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <h2>----------------------------------------------------------------</h2>
      <h3>Home team</h3>
      <div className="home-scorecard">
        <table className="home-roster">
          <tbody>
            <tr className="player-columns-categories">
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
              return (
                <ScorecardRow
                  key={player.playerId}
                  player={player}
                  pbp={pbp}
                  teamPbp={teamPbp.homeInnings}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
