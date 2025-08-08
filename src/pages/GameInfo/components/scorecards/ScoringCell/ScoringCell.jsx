// This will be a filled scorecard cell properly formatted
import React from "react";
import ScoringCellDiamond from "./ScoringCellDiamond";

export default function ScoringCell({ outcome, info, scoringOutcomes }) {
  // placeholder for linking recap and scorecard events
  // const logInfo = (event) => {
  //   // console.log(info.eventId);
  //   console.log(event.target)
  // };
  return (
    <div className="scorecard-cell scoring-cell">
      <ScoringCellDiamond scoringOutcomesArr={scoringOutcomes} isScoring={true}/>
      {info.isOut ? <p className="out-indicator">{info.outNumber}</p> : null}
      {info.isFinalOut ? <div className="final-out-indicator"></div> : null}
    </div>
  );
}
