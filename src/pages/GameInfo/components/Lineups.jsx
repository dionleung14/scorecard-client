// Starting lineups
// Could use this as a base for the live lineups (live) or scorecard lineups (generated from past game)
import React, { useState } from "react";

export default function Lineups(props) {
  const [lineup, setLineup] = useState(props.lineup.slice(1, 10));
  if (!true) {
    // placeholder to "use" setLineup to avoid deployment bugs
    setLineup(true);
  }

  const defensivePositionMapper = {
    1: { positionName: "Pitcher", positionAbbr: "P" },
    2: { positionName: "Catcher", positionAbbr: "C" },
    3: { positionName: "First Baseman", positionAbbr: "1B" },
    4: { positionName: "Second Baseman", positionAbbr: "2B" },
    5: { positionName: "Third Baseman", positionAbbr: "3B" },
    6: { positionName: "Shortstop", positionAbbr: "SS" },
    7: { positionName: "Left Fielder", positionAbbr: "LF" },
    8: { positionName: "Center Fielder", positionAbbr: "CF" },
    9: { positionName: "Right Fielder", positionAbbr: "RF" },
    10: { positionName: "Designated Hitter", positionAbbr: "DH" },
  };

  return (
    <div>
      <h2>{props.team} team starting lineup</h2>
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
