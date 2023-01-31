// This file represents a complete row in the scorecard, with player info on the left, baseball info on the right
import React from "react";
import ScoringCell from "./ScoringCell";
import EmptyCell from "./EmptyCell";
import { defensivePositionMapper } from "../../../util/constants";

export default function ScorecardRow({ player, pbp, teamPbp }) {

  return (
    <tr>
      <th>{player.jerseyNumber}</th>
      <th>{player.lastName}</th>
      {/* <th>{player.defensivePosition.positionAbbr}</th> */}
      <th>{defensivePositionMapper[player.positionNumber].positionAbbr}</th>
      {teamPbp.map((inning, index) => { 
        if (inning.battersInvolved.includes(player.playerId)) {
          return <ScoringCell key={index} />
        } else {
          return <EmptyCell key={index} />
        }
      })}
    </tr>
  );
}
