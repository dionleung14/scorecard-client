import React from "react";
import { FullScorecardRow } from "./index.js";

export default function FullScorecard({ fullScorecard }) {
  return (
    <div className="fullscorecard fullscorecard-container">
      <div className="fullscorecard-column-header-container">
        {fullScorecard.scorecardColumns.map(columnHeader => {
          return <div className="fullscorecard-column-header">{columnHeader}</div>;
        })}
      </div>
      {fullScorecard.scorecardRows.map(scoreCardRow => {
        return <FullScorecardRow scoreCardRow={scoreCardRow} />;
      })}
    </div>
  );
}
