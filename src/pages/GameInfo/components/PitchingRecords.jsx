import React, { useState } from "react";
import PitcherRow from "./PitcherRow";

export default function PitchingRecords({ pitchers, team }) {
  const [pitchingChanges, setPitchingChanges] = useState(pitchers);
  return pitchingChanges.map(inning => {
    if (team.toLowerCase() === "away") {
      // pitching change happened for the away team; bottom of the inning
      return <PitcherRow pitcherArr={inning.bottomEvents} />;
    } else if (team.toLowerCase() === "home") {
      // pitching change happened for the home team; top of the inning
      return <PitcherRow pitcherArr={inning.topEvents} />;
    }
  });
  // <tr>
  //   <td>{pitcher.jerseyNumber}</td>
  //   <td>
  //     {pitcher.firstName} {pitcher.lastName}
  //   </td>
  //   <td>{defensivePositionMapper[1].positionAbbr}</td>
  // </tr>
}
