// Legacy code migrated to ScorecardRow, deletion pending

import React from "react";
import ScoringCell from "./ScoringCell";
// import EmptyCell from "./EmptyCell";
// import {getPlayerIdsPerInning} from "../util/scoringIdentity"

export default function ScoringRow({ player, teamPbp }) {
  return (
    <tr>
      {teamPbp.map((inningsPlays, index) => {
        return inningsPlays.plays.map(play => {
          if (play.batterId === player.playerId && index + 1 === inningsPlays.inning) {
            return <ScoringCell key={index} />;
          // } else if (index + 1 === inningsPlays.inning) {
          //   return <EmptyCell />;
          } else {
            return null;
          }
        });
      })}
    </tr>
  );
}
