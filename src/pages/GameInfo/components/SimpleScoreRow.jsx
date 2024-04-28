// The simple score with teams, runs, hits, errors
import React from "react";

export default function SimpleScoreRow(props) {
  const { teamInfo } = props;
  return (
    <tr>
      <td>{teamInfo.team.teamAbbr}</td>
      <td>{teamInfo.runs}</td>
      <td>{teamInfo.hits}</td>
      <td>{teamInfo.errors}</td>
    </tr>
  );
}
