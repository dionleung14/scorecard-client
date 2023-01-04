import React from "react";

export default function SimpleScore(props) {
  const { simpleScore } = props;
  return (
    <div>
      <h2>Final score</h2>
      <table>
        <tbody>
          <tr>
            <th>{null}</th>
            <th>Runs</th>
            <th>Hits</th>
            <th>Errors</th>
          </tr>
          <tr>
            <td>{simpleScore.awayTeam.abbr}</td>
            <td>{simpleScore.awayTeam.runs}</td>
            <td>{simpleScore.awayTeam.hits}</td>
            <td>{simpleScore.awayTeam.errors}</td>
          </tr>
          <tr>
            <td>{simpleScore.homeTeam.abbr}</td>
            <td>{simpleScore.homeTeam.runs}</td>
            <td>{simpleScore.homeTeam.hits}</td>
            <td>{simpleScore.homeTeam.errors}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
