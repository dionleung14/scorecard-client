// Legacy code migrated to ScorecardRow, deletion pending

import React from "react";
import ScoringCell5 from "./ScoringCell5";
import EmptyCell from "./EmptyCell";
// import {getPlayerIdsPerInning} from "../util/scoringIdentity"

export default function ScoringRow5({ order }) {
  return (
    <tr>
      {order.map((inningCell, index) => {
        if (inningCell.involved === true) {
          return <ScoringCell5 outcome={inningCell.scoringOutcome} />;
        } else {
          return <EmptyCell />;
        }
      })}
    </tr>
  );
}
