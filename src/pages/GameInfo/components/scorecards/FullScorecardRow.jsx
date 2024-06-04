import React from "react";
import ScoringCell5 from "./ScoringCell5";
import EmptyCell from "./EmptyCell";

export default function FullScorecardRow({ row }) {
  const playInnings = row.slice(4, row.length);
  return (
    <tr>
      <td>{row[0]}</td>
      <td>
        {row[1].map(batterNumber => {
          return <p>{batterNumber}</p>;
        })}
      </td>
      <td>
        {row[2].map(batterName => {
          return <p>{batterName}</p>;
        })}
      </td>
      <td>
        {row[3].map(batterPosition => {
          return <p>{batterPosition}</p>;
        })}
      </td>
      {playInnings.map(playedInningCell => {
        if (playedInningCell.involved === true) {
          return <ScoringCell5 outcome={playedInningCell.scoringOutcome} />;
        } else {
          return <EmptyCell />;
        }
      })}
    </tr>
  );
}
