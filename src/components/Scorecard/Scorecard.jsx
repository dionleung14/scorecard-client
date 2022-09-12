import React from 'react'
import PlayersColumn from './components/PlayersColumn';

export default function Scorecard({ pbp, lineups }) {
  let homeBatters = lineups.homeTeam.slice(1, lineups.length);
  let awayBatters = lineups.awayTeam.slice(1, lineups.length);
  return (
    <div>
      <table>
        <tr>
          <th></th>{/* jersey number */}
          <th></th>{/* name */}
          <th></th>{/* position */}
          {pbp.map((inning, index)=>{
            return <th key={index}>{inning.number}</th>
          })}
        </tr>
        {awayBatters.map(player => {
          return (
            <PlayersColumn player={player} />
          );
        })}
      </table>
      <h2>------------------------------</h2>
      <table>
      <tr>
          <th></th>{/* jersey number */}
          <th></th>{/* name */}
          <th></th>{/* position */}
          {pbp.map((inning, index)=>{
            return <th key={index}>{inning.number}</th>
          })}
        </tr>
        {homeBatters.map(player => {
          return (
            <PlayersColumn player={player} />
          );
        })}
      </table>
    </div>
  );
}
