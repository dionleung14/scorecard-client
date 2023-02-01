// This file is the combined scorecard section in the GameInfo page

import React from "react";
// import PlayerColumns from "./components/PlayerColumns";
// import ScoringCell from "./components/ScoringCell";
import ScorecardRow from "./components/ScorecardRow";
import ScorecardRowSub from "./components/ScorecardRowSub";
import {
  arrangeBattersByOrder,
  createBattedAroundColumn,
} from "../../services/evaluateLineupChange";
import "./combinedScorecard.css";

export default function CombinedScorecard({
  pbp,
  teamPbp,
  battingLineupsWithSubs,
}) {
  let homeBatters = arrangeBattersByOrder(battingLineupsWithSubs.homeTeam);
  let awayBatters = arrangeBattersByOrder(battingLineupsWithSubs.awayTeam);

  return (
    <div className="scorecards">
      <h3>Away team</h3>
      <div className="scorecard away-scorecard">
        <table className="away-roster">
          <tbody>
            <tr className="player-columns-categories">
              {/* jersey number */}
              <th>Number</th>
              {/* name */}
              <th>Player</th>
              {/* position */}
              <th>Position</th>
              {teamPbp.awayInnings.map((inning, index) => {
                if (inning.columns && inning.columns.length > 0) {
                  return inning.columns.map(inningCol => {
                    return <th key={inningCol.columnNumber}>{inningCol.inning}</th>;
                  }) 
                } else {
                  return <th key={index}>{inning.inning}</th>;
                }
              })}
            </tr>
            {awayBatters.map((player, index) => {
              if (player.lineupArr && player.lineupArr.length > 0) {
                return (
                  <ScorecardRowSub
                    key={index}
                    players={player.lineupArr}
                    pbp={pbp}
                    teamPbp={teamPbp.awayInnings}
                  />
                );
              } else {
                return (
                  <ScorecardRow
                    key={player.playerId}
                    player={player}
                    pbp={pbp}
                    teamPbp={teamPbp.awayInnings}
                  />
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <h2>----------------------------------------------------------------</h2>
      <h3>Home team</h3>
      <div className="scorecard home-scorecard">
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
            {homeBatters.map((player, index) => {
              if (player.lineupArr && player.lineupArr.length > 0) {
                return (
                  <ScorecardRowSub
                    key={index}
                    players={player.lineupArr}
                    pbp={pbp}
                    teamPbp={teamPbp.homeInnings}
                  />
                );
              } else {
                return (
                  <ScorecardRow
                    key={player.playerId}
                    player={player}
                    pbp={pbp}
                    teamPbp={teamPbp.homeInnings}
                  />
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
