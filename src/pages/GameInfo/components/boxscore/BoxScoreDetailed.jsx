// Long boxscore component
import React from "react";
import BoxScoreDetailedRow from "./BoxScoreDetailedRow";

export default function BoxScoreDetailed({ gameInfo, toggleSimpleDetailed }) {
  return (
    <div>
      <h1>Boxscore</h1>
      <button onClick={toggleSimpleDetailed}>View fewer details</button>
      <table className="boxscore-table">
        <tbody>
          <tr>
            <th>Team</th>
            {gameInfo.home.scoring.map((inning, index) => {
              return <th key={index}>{index + 1}</th>;
            })}
            <th>Runs</th>
            <th>Hits</th>
            <th>Errors</th>
          </tr>
          <BoxScoreDetailedRow teamInfo={gameInfo.away} />
          <BoxScoreDetailedRow teamInfo={gameInfo.home} />
        </tbody>
      </table>
    </div>
  );
}
