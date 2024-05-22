import React from "react";
import { defensivePositionMapper } from "../../../util/constants";

export default function PitcherRow({ pitcher }) {

  return (
    <tr key={pitcher.sequenceNumber}>
      <td>{pitcher.jerseyNumber}</td>
      <td>
        {pitcher.preferredName}{" "}
        {pitcher.lastName}
      </td>
      <td>{defensivePositionMapper[1].positionAbbr}</td>
    </tr>
  );
}
