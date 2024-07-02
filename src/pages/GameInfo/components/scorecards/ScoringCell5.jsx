// This will be a filled scorecard cell properly formatted. Until then, an X
import React from "react";

export default function ScoringCell5({ outcome, info }) {
  // placeholder for linking recap and scorecard events
  const logInfo = () => {
    console.log(info.eventId);
  };
  return (
    <td className="scorecard-cell scoring-cell" onClick={logInfo}>
      {outcome}
      {info.isOut ? <p className="out-indicator">{info.outNumber}</p> : null}
    </td>
  );
}
