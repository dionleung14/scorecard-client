import React, { useState } from "react";
import PitcherRow from "./PitcherRow";

export default function PitchingRecords({ pitchers }) {
  const [pitchingChanges, setPitchingChanges] = useState(pitchers);
  if (!true) {
    // placeholder to "use" setLineup to avoid deployment bugs
    setPitchingChanges(true);
  }

  return pitchingChanges.map(pitcher => {
    return <PitcherRow key={pitcher.playerId} pitcher={pitcher}/>
  });
}
