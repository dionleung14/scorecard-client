import React from "react";
// import ScoringRow from "./ScoringRow";
import ScoringRow5 from "./ScoringRow5";

export default function Scoring({ innings, team, scoring}) {
  const {
    // batterRows
    batterRows5} = scoring
  return (
    <div>
      <h3>{team.market} {team.name}</h3>
      <div className="scorecard">
        <table className="roster">
          <tbody>
            <tr className="player-columns-categories">
              {/* <th>Number</th>
              <th>Player</th>
              <th>Position</th> */}
              {/* Scorecard row inning headers */}
              {innings.map((inning, index) => {
                if (inning.columns && inning.columns.length > 0) {
                  return inning.columns.map(inningCol => {
                    return (
                      <th
                        className="scorecard-inning-header"
                        key={inningCol.columnNumber}>
                        {inningCol.inningNumber}
                      </th>
                    );
                  });
                } else {
                  return (
                    <th className="scorecard-inning-header" key={index}>
                      {inning.inningNumber}
                    </th>
                  );
                }
              })}
            </tr>
            {/* {batterRows.map((battingOrder, index) => {
              return (
                <ScoringRow
                  order={battingOrder.order}
                  players={battingOrder.players}
                  innings={battingOrder.innings}
                  idx={index} />
              );
            })} */}
            {batterRows5.map((battingOrder, index) => {
              return (
                <ScoringRow5
                  order={battingOrder}
                  idx={index} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
