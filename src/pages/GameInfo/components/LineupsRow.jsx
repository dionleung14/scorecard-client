import React from "react";
import { defensivePositionMapper } from "../../../util/constants";

export default function LineupsRow(props) {
  const { player } = props;

  return (
    <tr key={player.playerId}>
      <td>{player.jerseyNumber}</td>
      <td>
        {player.preferredName} {player.lastName}
      </td>
      <td>{defensivePositionMapper[player.positionNumber].positionAbbr}</td>
    </tr>
  );
}
