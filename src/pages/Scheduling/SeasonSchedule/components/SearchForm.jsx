import React from "react";
import SearchFormSelectionYearsRange from "./SearchFormSelectionYearsRange";
// import teams from "../../../data/teams";
import teams from "../../../../data/teams";

export default function SearchForm({
  onSubmit,
  onReset,
  onChange,
  statefulForm,
}) {

  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <SearchFormSelectionYearsRange
        startYear="2016"
        endYear="2024"
        handleChange={onChange}
      />
      <select
        name="team"
        id="team"
        defaultValue="Choose a team"
        onChange={onChange}>
        <option disabled>Choose a team</option>
        {teams.map(team => {
          return (
            <option
              key={team.abbr}
              value={team.abbr}>{`${team.market} ${team.name}`}</option>
          );
        })}
      </select>
      <select
        name="type"
        id="type"
        defaultValue="Choose season type"
        onChange={onChange}>
        <option disabled>Choose season type</option>
        <option value="PRE">Preseason</option>
        <option value="REG">Regular season</option>
        <option value="PST">Postseason</option>
        <option value="AST">All-Star Game</option>
      </select>
      <input type="submit" value="Search" />
      {statefulForm.year ||
      statefulForm.team ||
      statefulForm.type ? (
        <input type="reset" value="Reset form" />
      ) : null}
    </form>
  );
}
