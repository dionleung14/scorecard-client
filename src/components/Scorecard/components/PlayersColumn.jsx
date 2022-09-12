import React from "react";

export default function PlayersColumn({ player }) {
  return (
    <tr>
      <th>{player.jerseyNumber}</th>
      <th>{player.lastName}</th>
      <th>{player.defensivePosition.positionAbbr}</th>
    </tr>
  );
}
