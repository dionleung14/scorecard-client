import React, { useState } from "react";
import { didPlayerGetSubbedOut } from "../../../services/evaluateLineupChange";
import StatefulLineupRow from "./StatefulLineupRow";
// import StatefulLineupRow from "./StatefulLineupRow";

export default function StatefulLineups({lineup: lineupProps, lineupChanges, team}) {
  const [lineup, setLineup] = useState(lineupProps.slice(1, 10));
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
    11: { positionName: "Pinch Hitter", positionAbbr: "PH" },
    12: { positionName: "Pinch Runner", positionAbbr: "PR" },
  };

  return (
    <div>
      <h2>{team} team lineup</h2>
      <table>
        <tbody>
          <tr>
            <th>Number</th>
            <th>Player</th>
            <th>Position</th>
          </tr>
          {lineup.length > 1
            ? lineup.map(player => {
              let subbed = didPlayerGetSubbedOut(player, lineupChanges[lineupChanges.length - 1])
              if (subbed) {
                return <StatefulLineupRow player={player} removed={true}/>
              } else {
                return <StatefulLineupRow player={player}/>
              }
              })
            : null}
          {/* Pitchers at the end at index 0 */}
          <tr>
            <td>{lineup[0].jerseyNumber}</td>
            <td>
              {lineup[0].firstName} {lineup[0].lastName}
            </td>
            <td>{defensivePositionMapper[1].positionAbbr}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
