// This file represents a complete row in the scorecard, with player info on the left, baseball info on the right
import React from "react";
import ScoringCell from "./ScoringCell";
import EmptyCell from "./EmptyCell";
import { defensivePositionMapper } from "../../../util/constants";

export default function ScorecardRowCombnied({ player, pbp, teamPbp }) {
  return (
    <tr>
      <th>{player.jerseyNumber}</th>
      <th>{player.lastName}</th>
      {/* <th>{player.defensivePosition.positionAbbr}</th> */}
      <th>{defensivePositionMapper[player.positionNumber].positionAbbr}</th>
      {teamPbp.map((inning, index) => {
        if (inning.battedAround === true) {
          let scorecardColumns = [];
          inning.columns.forEach((column, index) => {
            let columnNum = inning.battersInvolved.filter(batter => {
              return batter.columnNumber === index + 1;
            });
            scorecardColumns.push(columnNum);
          });
          let last = scorecardColumns[scorecardColumns.length - 1];
          for (let count = 9 - last.length; count < 10; count++) {
            last.push(null);
          }
          // console.log(scorecardColumns)
          return scorecardColumns.forEach(eachColArr => {
            eachColArr.map(batter => {
              if (batter !== null) {
                return <ScoringCell />;
              } else {
                return <EmptyCell />;
              }
            });
          });
          // const batterAppearances = inning.battersInvolved.filter(batter => {
          //   return batter.batterId === player.playerId;
          // })
          // console.log(batterAppearances)
          // batterAppearances.map(plateAppearance => {
          //   return <ScoringCell />
          // })
        } else if (inning.battersInvolved.includes(player.playerId)) {
          return <ScoringCell key={index} />;
        } else {
          return <EmptyCell key={index} />;
        }
      })}
    </tr>
  );
}
