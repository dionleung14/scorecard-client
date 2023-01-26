import React, { useState } from "react";
import PitcherRow from "./PitcherRow";

export default function PitchingRecords({ pitchers, team }) {
  const [pitchingChanges, setPitchingChanges] = useState(pitchers);
  if (!true) {
    // placeholder to "use" setLineup to avoid deployment bugs
    setPitchingChanges(true);
  }
  return pitchingChanges.map((inning, index) => {
    if (team.toLowerCase() === "away") {
      // pitching change happened for the away team; bottom of the inning
      return <PitcherRow key={index} pitcherArr={inning.bottomEvents} />;
    } else if (team.toLowerCase() === "home") {
      // pitching change happened for the home team; top of the inning
      return <PitcherRow key={index} pitcherArr={inning.topEvents} />;
    }
  });
}
