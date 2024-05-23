import React, { useState } from "react";
import StatefulLineupRow from "./StatefulLineupRow";

export default function StatefulLineups({
  battingLineupsWithSubs,
  pitchersRecords,
  team,
}) {
  const [
    // pitcher, 
    setPitcher] = useState(pitchersRecords[0]);
  // const [lineup, setLineup] = useState(startingLineup.slice(1, 10));
  const [lineup, setLineup] = useState(battingLineupsWithSubs);
  if (!true) {
    // placeholder to "use" setLineup to avoid deployment bugs
    setLineup(true);
  }
  if (!true) {
    // placeholder to "use" setPitcher to avoid deployment bugs
    setPitcher(true);
  }

  return (
    <div>
      <h2>{team} team lineup</h2>
      <table>
        <tbody className="batting-lineups">
          <tr>
            <th>Batting Order</th>
            <th>Number</th>
            <th>Player</th>
            <th>Position</th>
          </tr>
          {lineup && lineup.length > 1
            ? lineup.map((player, index) => {
                if (player.lineupArr && player.lineupArr.length > 0) {
                  return (
                    <StatefulLineupRow
                      key={index}
                      order={index}
                      players={player.lineupArr}
                    />
                  );
                } else {
                  return null
                }
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
