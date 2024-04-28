// Long boxscore component
import React from "react";
import BoxScoreRow from "./BoxScoreRow"

export default function BoxScore(props) {
  const { gameInfo } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Team</th>
            {gameInfo.home.scoring.map((inning, index) => {
              return <th key={index}>{index + 1}</th>;
            })}
            <th>Runs</th>
            <th>Hits</th>
            <th>Errors</th>
          </tr>
          <BoxScoreRow teamInfo={gameInfo.away}/>
          <BoxScoreRow teamInfo={gameInfo.home}/>
        </tbody>
      </table>
    </div>
  );
}
