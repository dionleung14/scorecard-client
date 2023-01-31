// This component deals with the years available to select for getting games in a season
import React from "react";

export default function SelectionYearsRange(props) {
  const { startYear, endYear } = props;
  let iterations = parseInt(endYear) - parseInt(startYear);
  let iterableYears = [];
  for (let i = 0; i < iterations + 1; i++) {
    iterableYears.push(i + parseInt(startYear));
  }
  return (
    <select
      name="year"
      id="year"
      defaultValue="Choose season year"
      onChange={props.handleChange}>
        <option disabled>Choose season year</option>
      {iterableYears.map(year => {
        return (
          <option value={year} key={year}>
            {year}
          </option>
        );
      })}
    </select>
  );
}
