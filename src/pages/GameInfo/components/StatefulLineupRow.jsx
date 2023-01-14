import React from "react";

export default function StatefulLineupRow({ player, removed, team }) {
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

  // return (
  //   <tr>
  //     <th>{player.jerseyNumber}</th>
  //     <th>{player.lastName}</th>
  //     <th>{player.defensivePosition.positionAbbr}</th>
  //     {teamPbp.map((inning, index) => {
  //       if (inning.battersInvolved.includes(player.playerId)) {
  //         return <ScoringCell key={index} />
  //       } else {
  //         return <EmptyCell key={index} />
  //       }
  //     })}
  //   </tr>
  // );

  if (removed) {
    return (
      <tr>
        <td>
          <p className="removed">{player.jerseyNumber}</p>
        </td>
        <td>
          <p className="removed">
            {player.preferredName} {player.lastName}
          </p>
        </td>
        <td className="removed">{defensivePositionMapper[player.positionNumber].positionAbbr}</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>
          <p>{player.jerseyNumber}</p>
        </td>
        <td>
          <p>
            {player.preferredName} {player.lastName}
          </p>
        </td>
        <td>{defensivePositionMapper[player.positionNumber].positionAbbr}</td>
      </tr>
    );
  }
}
