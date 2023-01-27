import React, { useState } from "react";
import { didPlayerGetSubbedOut, arrangeBattersByOrder } from "../../../services/evaluateLineupChange";
import StatefulLineupRow from "./StatefulLineupRow";
import StatefulLineupRowSub from "./StatefulLineupRowSub";
import PitchingRecords from "./PitchingRecords";

export default function StatefulLineups({
  startingLineup,
  battingChanges,
  battingLineupsWithSubs,
  allOutgoingPlayers,
  pitchingChanges,
  team,
}) {
  const [pitcher, setPitcher] = useState(startingLineup[0]);
  // const [lineup, setLineup] = useState(startingLineup.slice(1, 10));
  const [lineup, setLineup] = useState(arrangeBattersByOrder(battingLineupsWithSubs));
  if (!true) {
    // placeholder to "use" setLineup to avoid deployment bugs
    setLineup(true);
  }
  if (!true) {
    // placeholder to "use" setPitcher to avoid deployment bugs
    setPitcher(true);
  }

  // arrangeBattersByOrder(battingLineupsWithSubs)
  return (
    <div>
      <h2>{team} team lineup</h2>
      <table>
        <tbody className="batting-lineups">
          <tr>
            <th>Number</th>
            <th>Player</th>
            <th>Position</th>
          </tr>
          {lineup.length > 1
            ? lineup.map((player, index) => {
                // let subbed = didPlayerGetSubbedOut(player, allOutgoingPlayers);
                // if (subbed) {
                if (player.lineupArr && player.lineupArr.length > 0) {
                // if (player.lineupArr) {
                  // return a version of StatefulLineupRow where the incoming player is under the starter
                  return (
                    <StatefulLineupRowSub
                      key={index}
                      players={player.lineupArr}
                      team={team}
                      battingChanges={battingChanges}
                    />
                  );
                } else {
                  return (
                    <StatefulLineupRow
                      key={player.id}
                      player={player}
                      team={team}
                    />
                  );
                }
              })
            : null}
        </tbody>
      </table>


      <h5>{team} team pitchers</h5>
      <table>
        <tbody>
        <tr>
            <th>Number</th>
            <th>Player</th>
            <th>Position</th>
            {/* <th>Innings pitched</th>
            <th>Hits</th>
            <th>Runs</th>
            <th>Earned Runs</th>
            <th>BB</th>
            <th>K</th>
            <th>HBP</th>
            <th>BK</th>
            <th>WP</th>
            <th>TBF</th> */}
          </tr>
          {/* Starting pitchers at the end at index 0 (in state as pitcher) */}
          <tr>
            <td>{pitcher.jerseyNumber}</td>
            <td>
              {pitcher.firstName} {pitcher.lastName}
            </td>
            {/* <td>{defensivePositionMapper[1].positionAbbr}</td> */}
            <td>SP</td>
          </tr>
          <PitchingRecords
            startingPitcher={pitcher}
            pitchers={pitchingChanges}
            team={team}
          />
        </tbody>
      </table>
    </div>
  );
}
