// The simple score with teams, runs, hits, errors
import React from "react";
import BoxScoreSimpleRow from "./BoxScoreSimpleRow";

export default function BoxScoreSimple({ gameInfo, toggleSimpleDetailed }) {
  return (
    <div>
      <h1>Boxscore</h1>{" "}
      <button onClick={toggleSimpleDetailed}>View more details</button>
      <table className="boxscore-table">
        <tbody>
          <tr>
            <th>Team</th>
            <th>Runs</th>
            <th>Hits</th>
            <th>Errors</th>
          </tr>
          <BoxScoreSimpleRow teamInfo={gameInfo.away} />
          <BoxScoreSimpleRow teamInfo={gameInfo.home} />
        </tbody>
      </table>
    </div>
  );
}
