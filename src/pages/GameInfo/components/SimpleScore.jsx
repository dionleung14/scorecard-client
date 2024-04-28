// The simple score with teams, runs, hits, errors
import React from "react";
import SimpleScoreRow from "./SimpleScoreRow";

export default function SimpleScore(props) {
  const { gameInfo } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Team</th>
            <th>Runs</th>
            <th>Hits</th>
            <th>Errors</th>
          </tr>
          <SimpleScoreRow teamInfo={gameInfo.away}/>
          <SimpleScoreRow teamInfo={gameInfo.home}/>
        </tbody>
      </table>
    </div>
  );
}
