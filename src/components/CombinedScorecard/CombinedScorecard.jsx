import React from "react";
// import PlayerColumns from "./components/PlayerColumns";
// import ScoringCell from "./components/ScoringCell";
import ScorecardRow from "./components/ScorecardRow";
// import ScoringRow from "./components/ScoringRow";

export default function CombinedScorecard({ pbp, teamPbp, lineups }) {
  let homeBatters = lineups.homeTeam.slice(1, lineups.length);
  let awayBatters = lineups.awayTeam.slice(1, lineups.length);
  return (
    <div className="scorecards">
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
      <div className="home-scorecard">
        <table className="home-roster">
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
        </table>
      </div>
    </div>
  );
}
