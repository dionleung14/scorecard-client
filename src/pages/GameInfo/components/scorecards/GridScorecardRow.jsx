import React from "react";
import { ScoringCell, EmptyCell } from "./ScoringCell";

// This component represents an entire row of a scorecard for a given spot in the batting order
export default function GridScorecardRow({ scoreCardRow }) {
  // console.log(scoreCardRow)
  // const playInnings = scoreCardRow.slice(4, scoreCardRow.length);
  const playInnings = scoreCardRow.slice(4, scoreCardRow.length);
  return (
    <div className="grid-scorecard-row-content-container">
      <div className="gridscorecard-player-info-container">
      {scoreCardRow[0] == "Batting Order" ? (
        <div className="player-info gridscorecard-column-header">
          {scoreCardRow[0]}
        </div>
      ) : (
        <div className="player-info gridscorecard-row-batting-order battingorder">{scoreCardRow[0]}</div>
      )}
        <div className="player-info gridscorecard-batter-number-container">
          {scoreCardRow[1] != "Number" ? (
            scoreCardRow[1].map(batterNumber => {
              return (
                <div className="grid-scorecard-row-batter-number">
                  <p>{batterNumber}</p>
                </div>
              );
            })
          ) : (
            <div className="gridscorecard-column-header player-info">
              {scoreCardRow[1]}
            </div>
          )}
        </div>
        <div className="player-info gridscorecard-batter-name-container">
          {scoreCardRow[2] != "Player" ? (
            scoreCardRow[2].map(batterName => {
              return (
                <div className="grid-scorecard-row-batter-name">
                  <p>{batterName}</p>
                </div>
              );
            })
          ) : (
            <div className="gridscorecard-column-header player-info">
              {scoreCardRow[2]}
            </div>
          )}
        </div>
        <div className="player-info gridscorecard-batter-position-container">
        {scoreCardRow[3] != "Position" ? (
          scoreCardRow[3].map(batterPosition => {
            return (
              <div className="grid-scorecard-row-batter-position">
                <p>{batterPosition}</p>
              </div>
            );
          })
        ) : (
          <div className="gridscorecard-column-header player-info">
            {scoreCardRow[3]}
          </div>
        )}
        </div>
      </div>
      <div className="gridscorecard-played-innings-container">
      {playInnings.map(playedInningCell => {
        if (typeof playedInningCell == "number") {
          return (
            <div className="gridscorecard-column-header player-info">
              {playedInningCell}
            </div>
          );
        } else if (playedInningCell.involved === true) {
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
      })}</div>
    </div>
  );
}
