import React from "react";

export default function ScoringCellDiamond({ scoringOutcomesArr, isScoring }) {
  // placeholder for linking recap and scorecard events
  const logInfo = event => {
    // console.log(info.eventId);
    console.log(event.target);
  };
  return (
    <div className={`diamond ${isScoring ? "scoring-diamond" : "non-scoring-diamond"}`}>
      {!isScoring ? "--" : null}
      {scoringOutcomesArr?.map(scoringOutcome => {
        return <p onClick={logInfo}>{scoringOutcome.decision.scoringString}</p>;
      })}
    </div>
  );
}
