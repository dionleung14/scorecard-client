// The play by play text; need to handle bottom of the last inning if home team is leading
import React from "react";
import RecapTeams from "./RecapTeams";

export default function Recap(props) {
  const { inningData, teams } = props;
  return (
    <div className="inning-whole">
      <h3 className="inning-number">{inningData.number}</h3>
      <RecapTeams
        inningHalf="Top"
        team={teams.awayTeam}
        inningData={inningData.top}
      />
      {inningData.bottom.length > 0 ? (
        <RecapTeams
          inningHalf="Bottom"
          team={teams.homeTeam}
          inningData={inningData.bottom}
        />
      ) : null}
    </div>
  );
}
