import React, { useState } from "react";
import { didPlayerGetSubbedOut } from "../../../services/evaluateLineupChange";
import StatefulLineupRow from "./StatefulLineupRow";
import PitchingRecords from "./PitchingRecords";

export default function StatefulLineups({
  lineup: lineupProps,
  lineupChanges,
  team,
}) {
  const [pitcher, setPitcher] = useState(lineupProps[0]);
  const [lineup, setLineup] = useState(lineupProps.slice(1, 10));
  if (!true) {
    // placeholder to "use" setLineup to avoid deployment bugs
    setLineup(true);
  }
  if (!true) {
    // placeholder to "use" setLineup to avoid deployment bugs
    setPitcher(true);
  }

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
                let subbed = didPlayerGetSubbedOut(
                  player,
                  lineupChanges[lineupChanges.length - 1]
                );
                if (subbed) {
                  return <StatefulLineupRow player={player} removed={true} />;
                } else {
                  return <StatefulLineupRow player={player} />;
                }
              })
            : null}
          {/* Pitchers at the end at index 0 */}
          <PitchingRecords pitcher={pitcher} />
        </tbody>
      </table>
    </div>
  );
}
