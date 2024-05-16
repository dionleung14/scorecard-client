import React from "react";
import PitcherRow from "./PitcherRow";

export default function PitchingRecords({ pitchers }) {

  return (
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
          <td>{pitchers[0].jerseyNumber}</td>
          <td>
            {pitchers[0].firstName} {pitchers[0].lastName}
          </td>
          <td>SP</td>
        </tr>
        {pitchers.slice(1, pitchers.length).map(pitcher => {
          return <PitcherRow key={pitcher.playerId} pitcher={pitcher} />;
        })}
      </tbody>
    </table>
  );
}
