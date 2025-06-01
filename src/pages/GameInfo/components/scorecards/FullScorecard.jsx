import React from "react";
import FullScorecardRow from "./FullScorecardRow";

export default function FullScorecard({ fullScorecard }) {
  return (
    <table>
      <tbody>
        <tr>
          {fullScorecard.scorecardColumns.map(columnHeader => {
            return <th>{columnHeader}</th>;
          })}
        </tr>
        {fullScorecard.scorecardRows.map(scoreCardRow => {
          return <FullScorecardRow scoreCardRow={scoreCardRow} />;
        })}
      </tbody>
    </table>
  );
}
