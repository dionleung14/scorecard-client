import React from "react";
import { defensivePositionMapper } from "../../../util/constants";

export default function StatefulLineupRow({ players, removed, team }) {

  return (
    <tr>
      <td>
        {players.map(player => {
          return <p>{player.jerseyNumber}</p>;
        })}
      </td>
      <td>
        {players.map(player => {
          return (
            <p>
              {player.preferredName} {player.lastName}
            </p>
          );
        })}
      </td>
      <td>
        {players.map(player => {
          return (
            <p>
              {defensivePositionMapper[player.positionNumber].positionAbbr}
            </p>
          );
        })}
      </td>
    </tr>
  );
}
