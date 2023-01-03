import React from 'react'
import ScoringCell from "./ScoringCell";

export default function ScoringRow({player, pbp}) {
  return (
    <tr>
      <th>{player.jerseyNumber}</th>
      <th>{player.lastName}</th>
      <th>{player.defensivePosition.positionAbbr}</th>
      {pbp.map((scoringEvent, index) => {
        return <ScoringCell key={index} scoringEvent={scoringEvent}/>
      })}
    </tr>
  )
}
