import React from "react";
import ScoringCell from "./ScoringCell";
import EmptyCell from "./EmptyCell";

export default function ScorecardRow({ player, pbp, teamPbp }) {
  return (
    <tr>
      <th>{player.jerseyNumber}</th>
      <th>{player.lastName}</th>
      <th>{player.defensivePosition.positionAbbr}</th>
      {teamPbp.map(inning => { 
        if (inning.battersInvolved.includes(player.playerId)) {
          return <ScoringCell />
        } else {
          return <EmptyCell />
        }
      })}
    </tr>
  );
}
