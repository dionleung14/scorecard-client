import React from "react";
import ScoringCell from "./ScoringCell/ScoringCell";
import EmptyCell from "./ScoringCell/EmptyCell";

// This component represents an entire row of a scorecard for a given spot in the batting order
export default function FullScorecardRow({ scoreCardRow }) {
  const playInnings = scoreCardRow.slice(4, scoreCardRow.length);
  return (
    <tr className="full-scorecard-row">
      <td>{scoreCardRow[0]}</td>
      <td>
        {scoreCardRow[1].map(batterNumber => {
          return <p>{batterNumber}</p>;
        })}
      </td>
      <td>
        {scoreCardRow[2].map(batterName => {
          return <p>{batterName}</p>;
        })}
      </td>
      <td>
        {scoreCardRow[3].map(batterPosition => {
          return <p>{batterPosition}</p>;
        })}
      </td>
      {playInnings.map(playedInningCell => {
        if (playedInningCell.involved === true) {
          return (
            <ScoringCell
            scoringOutcomes={playedInningCell.involvement.scoringOutcomeArr}
              outcome={playedInningCell.scoringOutcome}
              info={playedInningCell}
            />
          );
        } else {
          return <EmptyCell />;
        }
      })}
    </tr>
  );
}
