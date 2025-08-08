import React from "react";

export default function ColumnHeaders({ columnHeaders }) { // TODO: refactor this lol
  const playerInfoColumns = columnHeaders.slice(0, 4);
  const inningInfoColumns = columnHeaders.slice(4);

  return (
    <div className="fullscorecard-column-header-container">
      <div className="fullscorecard-player-info-container">
        {playerInfoColumns.map(columnHeader => {
          return (
            <div className={`fullscorecard-column-header player-info ${columnHeader.split(" ").join("").toLowerCase()}`}>
              {columnHeader}
            </div>
          );
        })}
      </div>
      <div className="fullscorecard-played-innings-container">
        {inningInfoColumns.map(columnHeader => {
          return (
            <div className="fullscorecard-column-header inning-column">
              {columnHeader}
            </div>
          );
        })}
      </div>
    </div>
  );
}
