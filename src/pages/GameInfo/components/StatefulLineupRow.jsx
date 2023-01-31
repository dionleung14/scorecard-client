import React from "react";
import { defensivePositionMapper } from "../../../util/constants";

export default function StatefulLineupRow({
  player,
  battingChanges,
  removed,
  team,
}) {

  // return (
  //   <tr>
  //     <th>{player.jerseyNumber}</th>
  //     <th>{player.lastName}</th>
  //     <th>{player.defensivePosition.positionAbbr}</th>
  //     {teamPbp.map((inning, index) => {
  //       if (inning.battersInvolved.includes(player.playerId)) {
  //         return <ScoringCell key={index} />
  //       } else {
  //         return <EmptyCell key={index} />
  //       }
  //     })}
  //   </tr>
  // );

  return (
    <tr>
      <td>
        <p>{player.jerseyNumber}</p>
      </td>
      <td>
        <p>
          {player.preferredName} {player.lastName}
        </p>
      </td>
      <td>{defensivePositionMapper[player.positionNumber].positionAbbr}</td>
    </tr>
  );
}
