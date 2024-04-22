// The play by play text; need to handle bottom of the last inning if home team is leading
import React from "react";
// import { evaluateLineupChange } from "../../../services/evaluateLineupChange";

export default function PlayByPlay(props) {
  const { inningData } = props;
  return (
    <div className="inning-whole">
      <h3 className="inning-number">{inningData.number}</h3>
      <div
        className="inning-top"
        style={{
          color: `#${inningData.awayTeamColors.secondary}`,
          backgroundColor: `#${inningData.awayTeamColors.primary}`,
        }}>
        <h5 className="inning-top-or-bottom">Top</h5>
        <ol>
          {inningData.top.map(inningEvent => {
            return (
              <li key={inningEvent.eventId} data-pbp-id={inningEvent.eventId}>
                {inningEvent.description}
              </li>
            );
          })}
        </ol>
      </div>
      {inningData.bottom.length > 0 ? (
        <div
          className="inning-bottom"
          style={{
            color: `#${inningData.homeTeamColors.secondary}`,
            backgroundColor: `#${inningData.homeTeamColors.primary}`,
          }}>
          <h5 className="inning-top-or-bottom">Bottom</h5>
          <ol>
            {inningData.bottom.map(inningEvent => {
              return (
                <li key={inningEvent.eventId} data-pbp-id={inningEvent.eventId}>
                  {inningEvent.description}
                </li>
              );
            })}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
