// This file has the routes matching the season endpoints on the server
import { LOCAL_BASE_URL } from "../../util/constants";

// get all games in a season for a given team
export const getSeasonGamesForATeam = async searchTerms => {
  console.log("fetching games in a season for a team");
  if (process.env.REACT_APP_ENVIRONMENT === "LOCAL_CLIENT") {
    console.log("using local server on 8080");
    const { year, team, type: season } = searchTerms;
    // The line of code (destructuring searchTerms) above is equivalent to the following 3 lines:
    // const year = searchTerms.year
    // const team = searchTerms.team
    // const season = searchTerms.type
    const savedData = searchTerms.savedData || false;
    let games = fetch(`${LOCAL_BASE_URL}/sportradar/season/team`, {
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
      let parsed = await response.json();
      return parsed;
    });
    return games;
  } else {
    const { year, team, type: season } = searchTerms;
    const savedData = searchTerms.savedData || false;
    console.log("fetching games in a season for a team");
    // const url = await process.env.REACT_APP_SERVER_URL;
    // let games = fetch(`${url}sportradar/season/team`, {
    let games = fetch(
      `https://scorecard-server-heroku-deploy.herokuapp.com/sportradar/season/team`,
      {
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
      }
    ).then(async response => {
      if (response.status === 200) {
        let parsed = await response.json();
        return parsed;
      } else if (response.status === 403) {
        // console.log("uh oh");
        return null;
      }
    });
    return games;
  }
};
