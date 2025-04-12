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
    let games = fetch(`${LOCAL_BASE_URL}/schedule/team`, {
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
    let games = fetch(
      `https://scorecard-server-heroku-deploy.herokuapp.com/schedule/team`,
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

// get single day data
export const getGamesInADay = async date => {
  console.log("getting schedule for games in a day");
  if (process.env.REACT_APP_ENVIRONMENT === "LOCAL_CLIENT") {
    console.log("using local server on 8080");
    const { year, month, day } = date;
    let games = fetch(`${LOCAL_BASE_URL}/schedule/day`, {
      method: "POST",
      body: JSON.stringify({
        year,
        month,
        day,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async response => {
        if (response.status === 202) {
          console.log("schedule data is from file");
        } else if (response.status === 200) {
          console.log("schedule data is from api");
        }
        let parsed = await response.json();
        return parsed;
      })
      .catch(err => {
        console.error(err);
      });
    return games;
  } else if (date) {
    console.log("hitting deployed server on AWS/Heroku");
    const { year, month, day } = date;
    const url = await process.env.REACT_APP_SERVER_URL;
    let games = fetch(`${url}schedule/day`, {
      method: "POST",
      body: JSON.stringify({
        year,
        month,
        day,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async response => {
        if (response.status === 202) {
          console.log("schedule data is from file");
        } else if (response.status === 200) {
          console.log("schedule data is from api");
        }
        let parsed = await response.json();
        return parsed;
      })
      .catch(err => {
        console.error(err);
      });
    return games;
  } else {
    let games = fetch("sportradar/game/day", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async response => {
        if (response.status === 202) {
          console.log("schedule data is from file");
        } else if (response.status === 200) {
          console.log("schedule data is from api");
        }
        let parsed = await response.json();
        return parsed.games;
      })
      .catch(err => {
        console.error(err);
      });
    return games;
  }
};

// get sample games data
export const getSavedSampleGames = async date => {
  console.log("getting saved sample games");
  let games = fetch(`${LOCAL_BASE_URL}/schedule/saved`, {
    method: "POST",
    body: JSON.stringify({
      year,
      month,
      day,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async response => {
      if (response.status === 202) {
        console.log("schedule data is from file");
      } else if (response.status === 200) {
        console.log("schedule data is from api");
      }
      let parsed = await response.json();
      return parsed;
    })
    .catch(err => {
      console.error(err);
    });
  return games;
  // if (process.env.REACT_APP_ENVIRONMENT === "LOCAL_CLIENT") {
  //   console.log("using local server on 8080");
  //   const { year, month, day } = date;
  //   let games = fetch(`${LOCAL_BASE_URL}/schedule/saved`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       year,
  //       month,
  //       day,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(async response => {
  //       if (response.status === 202) {
  //         console.log("schedule data is from file");
  //       } else if (response.status === 200) {
  //         console.log("schedule data is from api");
  //       }
  //       let parsed = await response.json();
  //       return parsed;
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  //   return games;
  // } else if (date) {
  //   console.log("hitting deployed server on AWS/Heroku");
  //   const { year, month, day } = date;
  //   const url = await process.env.REACT_APP_SERVER_URL;
  //   let games = fetch(`${url}schedule/day`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       year,
  //       month,
  //       day,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(async response => {
  //       if (response.status === 202) {
  //         console.log("schedule data is from file");
  //       } else if (response.status === 200) {
  //         console.log("schedule data is from api");
  //       }
  //       let parsed = await response.json();
  //       return parsed;
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  //   return games;
  // } else {
  //   let games = fetch("sportradar/game/day", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(async response => {
  //       if (response.status === 202) {
  //         console.log("schedule data is from file");
  //       } else if (response.status === 200) {
  //         console.log("schedule data is from api");
  //       }
  //       let parsed = await response.json();
  //       return parsed.games;
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  //   return games;
  // }
};
