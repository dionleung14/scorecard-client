// Long boxscore component
import React from "react";
import BoxScoreDetailedRow from "./BoxScoreDetailedRow"

export default function BoxScoreDetailed({gameInfo}) {
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
          <BoxScoreDetailedRow teamInfo={gameInfo.away}/>
          <BoxScoreDetailedRow teamInfo={gameInfo.home}/>
        </tbody>
      </table>
    </div>
  );
}
