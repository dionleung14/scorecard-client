// This will be an empty scorecard cell properly formatted. Until then, just dashes
import React from "react";
import ScoringCellDiamond from "./ScoringCellDiamond";

export default function EmptyCell() {
  return (
    <td className="scorecard-cell empty-cell">
      <ScoringCellDiamond isScoring={false}/>
    </td>
  );
}
