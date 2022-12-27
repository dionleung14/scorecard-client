// get all games in a season for a given team
export const getSeasonGamesForATeam = async searchTerms => {
  const { year, team, type: season } = searchTerms;
  const savedData = searchTerms.savedData || false;
  console.log("fetching games in a season for a team");
  console.log(process.env.FAVORITE_POKEMON);
  let games = fetch(`sportradar/season/team`, {
    method: "POST",
    body: JSON.stringify({
      year,
      season,
      team,
      savedData,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async response => {
    console.log(response);
    let parsed = await response.json();
    return parsed;
  });
  return games;
};
