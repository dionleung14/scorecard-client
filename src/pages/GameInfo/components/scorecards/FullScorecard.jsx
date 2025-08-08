import React from "react";
import { FullScorecardRow, GridScorecardRow } from "./index.js";
import ColumnHeaders from "./ColumnHeaders.jsx";

export default function FullScorecard({ fullScorecard }) {

  const scorecardsWithHeader = [fullScorecard.scorecardColumns, ...fullScorecard.scorecardRows]
  // console.log(scorecardsWithHeader)
  return (
    <div className="fullscorecard fullscorecard-container">

        <ColumnHeaders columnHeaders={fullScorecard.scorecardColumns} />
        {/* {fullScorecard.scorecardColumns.map(columnHeader => {
          return (
            <div className="fullscorecard-column-header">{columnHeader}</div>
          );
        })} */}
      
      {/* <div className="fullscorecard-rows-container">
        {fullScorecard.scorecardRows.map(scoreCardRow => {
          return <FullScorecardRow scoreCardRow={scoreCardRow} />;
        })}
      </div> */}
      <div className="fullscorecard-content-container">
        {fullScorecard.scorecardRows.map(scoreCardRow => {
          return <GridScorecardRow scoreCardRow={scoreCardRow} />;
        })}
        {/* {scorecardsWithHeader.map(scoreCardRow => {
          return <GridScorecardRow scoreCardRow={scoreCardRow} />;
        })} */}
      </div>
    </div>
  );
}
