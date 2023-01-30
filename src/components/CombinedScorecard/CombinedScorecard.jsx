import React from "react";
// import PlayerColumns from "./components/PlayerColumns";
// import ScoringCell from "./components/ScoringCell";
import ScorecardRow from "./components/ScorecardRow";
import ScorecardRowSub from "./components/ScorecardRowSub";
import { arrangeBattersByOrder } from "../../services/evaluateLineupChange";
// import ScoringRow from "./components/ScoringRow";

export default function CombinedScorecard({
  pbp,
  teamPbp,
  lineups,
  battingLineupsWithSubs,
}) {
  // let homeBatters = lineups.homeTeam.slice(1, lineups.length);
  // let awayBatters = lineups.awayTeam.slice(1, lineups.length);
  let homeBatters = arrangeBattersByOrder(battingLineupsWithSubs.homeTeam);
  let awayBatters = arrangeBattersByOrder(battingLineupsWithSubs.awayTeam);

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
// this goes below the h2 of dashes
