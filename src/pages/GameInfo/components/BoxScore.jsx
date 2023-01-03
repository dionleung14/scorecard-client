import React from "react";

export default function BoxScore(props) {
  const { gameInfo } = props;
  return (
    <div>
      <h2>Box score</h2>
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
          <tr>
            <td>{gameInfo.away.name}</td>
            {gameInfo.away.scoring.map(inning => {
              return <td>{inning.runs}</td>;
            })}
            <td>{gameInfo.away.runs}</td>
            <td>{gameInfo.away.hits}</td>
            <td>{gameInfo.away.errors}</td>
          </tr>
          <tr>
            <td>{gameInfo.home.name}</td>
            {gameInfo.home.scoring.map(inning => {
              return <td>{inning.runs}</td>;
            })}
            <td>{gameInfo.home.runs}</td>
            <td>{gameInfo.home.hits}</td>
            <td>{gameInfo.home.errors}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
