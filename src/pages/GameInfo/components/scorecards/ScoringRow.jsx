import React from "react";
import ScoringCell from "../../../../components/CombinedScorecard/components/ScoringCell";
import EmptyCell from "./EmptyCell";
import { defensivePositionMapper } from "../../../../util/constants";

export default function ScoringRow({ order, players, innings, idx }) {
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
            return <ScoringCell scoringEvent={inning.scoringOutcome}/>;
          } else {
            return <EmptyCell />;
          }
      })}
    </tr>
  );
}
