// The simple score with teams, runs, hits, errors
import React from "react";

export default function SimpleScore(props) {
  const { simpleScore } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>{null}</th>
            <th>Runs</th>
            <th>Hits</th>
            <th>Errors</th>
          </tr>
          <tr>
            <td>{simpleScore.awayScoring.team.teamAbbr}</td>
            <td>{simpleScore.awayScoring.runs}</td>
            <td>{simpleScore.awayScoring.hits}</td>
            <td>{simpleScore.awayScoring.errors}</td>
          </tr>
          <tr>
            <td>{simpleScore.homeScoring.team.teamAbbr}</td>
            <td>{simpleScore.homeScoring.runs}</td>
            <td>{simpleScore.homeScoring.hits}</td>
            <td>{simpleScore.homeScoring.errors}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
