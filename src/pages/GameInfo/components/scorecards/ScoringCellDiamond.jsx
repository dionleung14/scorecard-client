import React from "react";

export default function ScoringCellDiamond({ scoringOutcomesArr }) {
    // placeholder for linking recap and scorecard events
  const logInfo = (event) => {
    // console.log(info.eventId);
    console.log(event.target)
  };
  return (
    <div className="square">
      {scoringOutcomesArr.map(scoringOutcome => {
        // return <p>;)</p>;
        return <p onClick={logInfo}>{scoringOutcome.decision.scoringString}</p>
      })}
    </div>
  );
}
