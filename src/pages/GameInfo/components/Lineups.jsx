import React, { useState } from "react";
import { defensivePositionMapper } from "../../../util/constants";

export default function Lineups(props) {
  const [lineup, setLineup] = useState(props.lineup.slice(1, 10));
  if (!true) {
    // placeholder to "use" setLineup to avoid deployment bugs
    setLineup(true);
  }

  return (
    <div>
      <h2>{props.team} team lineup</h2>
      <table>
        <tbody>
          <tr>
            <th>Number</th>
            <th>Player</th>
            <th>Position</th>
          </tr>
          {lineup.length > 1
            ? lineup.map(player => {
                return (
                  <tr key={player.playerId}>
                    <td>{player.jerseyNumber}</td>
                    <td>
                      {player.preferredName} {player.lastName}
                    </td>
                    <td>
                      {
                        defensivePositionMapper[player.positionNumber]
                          .positionAbbr
                      }
                    </td>
                  </tr>
                );
              })
            : null}
          {/* Pitchers at the end at index 0 */}
          <tr>
            <td>{props.lineup[0].jerseyNumber}</td>
            <td>
              {props.lineup[0].firstName} {props.lineup[0].lastName}
            </td>
            <td>{defensivePositionMapper[1].positionAbbr}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
