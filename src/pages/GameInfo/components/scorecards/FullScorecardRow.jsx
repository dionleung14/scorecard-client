import React from "react";
import { ScoringCell, EmptyCell } from "./ScoringCell";

// This component represents an entire row of a scorecard for a given spot in the batting order
export default function FullScorecardRow({ scoreCardRow }) {
  const playInnings = scoreCardRow.slice(4, scoreCardRow.length);
  return (
    <div className="full-scorecard-row-container">
      <div className="full-scorecard-row-batting-order">
        <p>{scoreCardRow[0]}</p>
      </div>
      <div className="full-scorecard-row-batter-number">
        {scoreCardRow[1].map(batterNumber => {
          return <p>{batterNumber}</p>;
        })}
      </div>
      <div className="full-scorecard-row-batter-name">
        {scoreCardRow[2].map(batterName => {
          return <p>{batterName}</p>;
        })}
      </div>
      <div className="full-scorecard-row-batter-position">
        {scoreCardRow[3].map(batterPosition => {
          return <p>{batterPosition}</p>;
        })}
      </div>
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
    </div>
  );
}
