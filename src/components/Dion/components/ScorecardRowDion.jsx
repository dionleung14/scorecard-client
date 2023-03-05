import React from "react";
import ScoringCell from "../../CombinedScorecard/components/ScoringCell";
import EmptyCell from "../../CombinedScorecard/components/EmptyCell";
import { defensivePositionMapper } from "../../../util/constants";

export default function ScorecardRowDion({ order, players, innings, idx }) {
  return (
    <tr>
      {/* <th>14</th>
      <th>Dion </th>
      <th>Leung </th> */}
      <th>
        {players.map(player => {
          return <p>{player.jerseyNumber}</p>;
        })}
      </th>
      <th>
        {players.map(player => {
          return (
            <p>
              {player.preferredName} {player.lastName}
            </p>
          );
        })}
      </th>
      <th>
        {players.map(player => {
          return (
            <p>{defensivePositionMapper[player.positionNumber].positionAbbr}</p>
          );
        })}
      </th>
      {innings.map(inning => {
          if (inning.involved === true) {
            return <ScoringCell />;
          } else {
            return <EmptyCell />;
          }
      })}
    </tr>
  );
}
