// This will be a filled scorecard cell properly formatted. Until then, an X
import React from "react";

export default function ScoringCell({ scoringEvent }) {
  if (scoringEvent) {
    return (
      <td className="scorecard-cell scoring-cell">
        {/* {scoringEvent.scoringString} */}
        {scoringEvent.out ? "Out" : "Safe"}
      </td>
    );
  } else {
    return <td className="scorecard-cell scoring-cell">X</td>;
  }
}
