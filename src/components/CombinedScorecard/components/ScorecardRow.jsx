import React from "react";
import ScoringCell from "./ScoringCell";
import EmptyCell from "./EmptyCell";

export default function ScorecardRow({ player, pbp, teamPbp }) {
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
  return (
    <tr>
      <th>{player.jerseyNumber}</th>
      <th>{player.lastName}</th>
      {/* <th>{player.defensivePosition.positionAbbr}</th> */}
      <th>{defensivePositionMapper[player.positionNumber].positionAbbr}</th>
      {teamPbp.map((inning, index) => { 
        if (inning.battersInvolved.includes(player.playerId)) {
          return <ScoringCell key={index} />
        } else {
          return <EmptyCell key={index} />
        }
      })}
    </tr>
  );
}
