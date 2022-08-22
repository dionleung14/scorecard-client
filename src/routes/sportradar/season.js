// get all games in a season for a given team
export const getSeasonGamesForATeam = async searchTerms => {
  const { year, team, type: season } = searchTerms;
  console.log("fetching games in a season for a team");
  let games = fetch(`sportradar/season/team`, {
    method: "POST",
    body: JSON.stringify({
      year,
      season,
      team,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async response => {
    let parsed = await response.json();
    return parsed;
  });
  return games;
};
