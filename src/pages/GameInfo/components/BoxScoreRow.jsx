// Long boxscore component
import React from "react";

export default function BoxScoreRow(props) {
  const { teamInfo } = props;
  return (
    <tr>
      <td>
        {teamInfo.team.market} {teamInfo.team.name}
      </td>
      {teamInfo.scoring.map((inning, index) => {
        return <td key={index}>{inning.runs}</td>;
      })}
      <td>{teamInfo.runs}</td>
      <td>{teamInfo.hits}</td>
      <td>{teamInfo.errors}</td>
    </tr>
  );
}
