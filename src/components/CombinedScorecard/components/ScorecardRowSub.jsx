import React, { useState } from "react";
import ScoringCell from "./ScoringCell";
import EmptyCell from "./EmptyCell";
import { 
  wasBatterInvolved
} from "../../../services/scorecardRowSub";
import { defensivePositionMapper } from "../../../util/constants";

export default function ScorecardRowSub({ players, pbp, teamPbp }) {
  const [playerIds, setPlayerIds] = useState([]);

  // useEffect(() => {
  //   let playerIdsTemp = [];
  //   players.forEach(player => {
  //     playerIdsTemp.push(player.playerId);
  //   });
  //   setPlayerIds([...playerIdsTemp]);
  // }, []);

  return (
    <tr>
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
      {playerIds && playerIds.length > 0
        ? teamPbp.map((inning, index) => {
            if (wasBatterInvolved(playerIds, inning.battersInvolved)) {
              return <ScoringCell key={index} />;
            } else {
              return <EmptyCell key={index} />;
            }
          })
        : null}
    </tr>
  );
}
