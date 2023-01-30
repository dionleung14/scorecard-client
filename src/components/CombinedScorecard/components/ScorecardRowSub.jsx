import React, { useState, useEffect } from "react";
import ScoringCell from "./ScoringCell";
import EmptyCell from "./EmptyCell";

export default function ScorecardRow({ players, pbp, teamPbp }) {
  const [playerIds, setPlayerIds] = useState([]);
  const defensivePositionMapper = {
    1: { positionName: "Pitcher", positionAbbr: "P" },
    2: { positionName: "Catcher", positionAbbr: "C" },
    3: { positionName: "First Baseman", positionAbbr: "1B" },
    4: { positionName: "Second Baseman", positionAbbr: "2B" },
    5: { positionName: "Third Baseman", positionAbbr: "3B" },
    6: { positionName: "Shortstop", positionAbbr: "SS" },
    7: { positionName: "Left Fielder", positionAbbr: "LF" },
    8: { positionName: "Center Fielder", positionAbbr: "CF" },
    9: { positionName: "Right Fielder", positionAbbr: "RF" },
    10: { positionName: "Designated Hitter", positionAbbr: "DH" },
    11: { positionName: "Pinch Hitter", positionAbbr: "PH" },
    12: { positionName: "Pinch Runner", positionAbbr: "PR" },
  };

  useEffect(() => {
    let playerIdsTemp = [];
    players.forEach(player => {
      playerIds.push(player.playerId);
    });
    setPlayerIds(...playerIdsTemp)
  }, []);

  const checkInvolvement = (playerId, battersInvolved) => {
    if (battersInvolved.includes(playerId)) {
      return true;
    } else {
      return false;
    }
  };
  
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
      {teamPbp.map((inning, index) => {
        if (playerIds.every(checkInvolvement(player, inning.battersInvolved))) {
          return <ScoringCell key={index} />;
        } else {
          return <EmptyCell key={index} />;
        }
      })}
      {/* {teamPbp.map((inning, index) => {
        if (inning.battersInvolved.includes(player.playerId)) {
          return <ScoringCell key={index} />;
        } else {
          return <EmptyCell key={index} />;
        }
      })} */}
    </tr>
  );
}
