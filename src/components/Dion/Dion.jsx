import React from "react";
import ScorecardRowDion from "./components/ScorecardRowDion";

export default function Dion({ dion, teamPbp }) {
  const { awayScorecard, homeScorecard } = dion;
  const awayRows = awayScorecard.batterRows;
  const homeRows = homeScorecard.batterRows;

  return (
    <div className="scorecards-dion">
      <div>
        <h3>Away team</h3>
        <div className="scorecard away-scorecard">
          <table className="away-roster">
            <tbody>
              <tr className="player-columns-categories">
                <th>Number</th>
                <th>Player</th>
                <th>Position</th>
                {/* Scorecard row inning headers */}
                {teamPbp.awayInnings.map((inning, index) => {
                  if (inning.columns && inning.columns.length > 0) {
                    return inning.columns.map(inningCol => {
                      return (
                        <th key={inningCol.columnNumber}>{inningCol.inning}</th>
                      );
                    });
                  } else {
                    return <th key={index}>{inning.inning}</th>;
                  }
                })}
              </tr>
              {awayRows.map((battingOrder, index) => {
                return (
                  <ScorecardRowDion
                    order={battingOrder.order}
                    players={battingOrder.players}
                    innings={battingOrder.innings}
                    idx={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3>Home team</h3>
        <div className="scorecard home-scorecard">
          <table className="home-roster">
            <tbody>
              <tr className="player-columns-categories">
                <th>Number</th>
                <th>Player</th>
                <th>Position</th>
                {teamPbp.homeInnings.map((inning, index) => {
                  if (inning.columns && inning.columns.length > 0) {
                    return inning.columns.map(inningCol => {
                      return (
                        <th key={inningCol.columnNumber}>{inningCol.inning}</th>
                      );
                    });
                  } else {
                    return <th key={index}>{inning.inning}</th>;
                  }
                })}
              </tr>
              {homeRows.map((battingOrder, index) => {
                return (
                  <ScorecardRowDion
                    order={battingOrder.order}
                    players={battingOrder.players}
                    innings={battingOrder.innings}
                    idx={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
