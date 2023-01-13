import React from "react";
// import { evaluateLineupChange } from "../../../services/evaluateLineupChange";

export default function PlayByPlay(props) {
  const { inningData } = props;
  return (
    <div className="inning-whole">
      <h3 className="inning-number">{inningData.number}</h3>
      <div className="inning-top">
        <h5 className="inning-top-or-bottom">Top</h5>
        <ol>
          {inningData.top.map(inningEvent => {
            // if (inningEvent.type === "lineup") {
            //   let substitution = evaluateLineupChange(inningEvent)
            //   console.log(substitution)
            // }
            return (
              <li key={inningEvent.eventId} data-pbp-id={inningEvent.eventId}>
                {inningEvent.description}
              </li>
            );
          })}
        </ol>
      </div>
      <div className="inning-bottom">
        <h5 className="inning-top-or-bottom">Bottom</h5>
        <ol>
          {inningData.bottom.map(inningEvent => {
            // if (inningEvent.type === "lineup") {
            //   let substitution = evaluateLineupChange(inningEvent)
            //   console.log(substitution)
            // }
            return (
              <li key={inningEvent.eventId} data-pbp-id={inningEvent.eventId}>
                {inningEvent.description}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
