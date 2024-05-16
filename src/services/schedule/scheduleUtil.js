import teams from "../../data/teams";

// generates string to display on search results page
const generateSearchResultsString = formObj => {
  const { year, team, type } = formObj;
  if (type !== "AST") {
    let teamFinder = teams.filter(club => {
      return club.abbr === team;
    });
    let seasonType;
    if (type === "PRE") {
      seasonType = "Preseason";
    } else if (type === "PST") {
      seasonType = "Postseason";
    } else if (type === "REG") {
      seasonType = "Regular Season";
    }
    let disp = `Search results for the ${year} ${teamFinder[0].market} ${teamFinder[0].name} ${seasonType}`;
    return disp;
  } else {
    return `Search results for the ${year} All-Star Game`;
  }
};

export { generateSearchResultsString };
