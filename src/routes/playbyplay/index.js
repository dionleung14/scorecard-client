// This file has the routes matching the play-by-play endpoints on the server
import { LOCAL_BASE_URL } from "../../util/constants";

// get single game boxscore data
export const getSingleGameBoxScore = async gameId => {
  console.log("getting single game boxscore");
  if (process.env.REACT_APP_ENVIRONMENT === "LOCAL_CLIENT") {
    console.log("using local server on 8080");
    let scores = fetch(
      // `${LOCAL_BASE_URL}/sportradar/game/game-info/boxscore/${gameId}`
      `${LOCAL_BASE_URL}/pbp/game-info/boxscore/${gameId}`
    ).then(async response => {
      if (response.status === 202) {
        console.log("boxscore data is from file");
      } else if (response.status === 200) {
        console.log("boxscore data is from api");
      }
      let parsed = await response.json();
      console.log(parsed);
      return parsed;
    });
    return scores;
  } else if (gameId) {
    const url = await process.env.REACT_APP_SERVER_URL;
    let scores = fetch(
      // `${url}sportradar/game/game-info/boxscore/${gameId}`
      // `${url}sportradar/pbp/game-info/boxscore/${gameId}`
      `${url}pbp/game-info/boxscore/${gameId}`
    ).then(async response => {
      if (response.status === 202) {
        console.log("boxscore data is from file");
      } else if (response.status === 200) {
        console.log("boxscore data is from api");
      }
      let parsed = await response.json();
      return parsed;
    });
    return scores;
  }
};

// get the play-by-play data for a given game
export const getPBPForAGame = async gameId => {
  console.log("getting play by play for a game");
  if (process.env.REACT_APP_ENVIRONMENT === "LOCAL_CLIENT") {
    console.log("using local server on 8080");
    let playByPlay = fetch(`${LOCAL_BASE_URL}/pbp/${gameId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async response => {
      if (response.status === 202) {
        console.log("data is from file");
      } else if (response.status === 200) {
        console.log("data is from api");
      }
      let parsed = await response.json();
      // console.log(parsed.startingLineups.homeTeam[0].defensivePosition);
      console.log(parsed);
      return parsed;
    });
    return playByPlay;
  } else if (gameId) {
    const url = await process.env.REACT_APP_SERVER_URL;
    // let playByPlay = fetch(`${url}sportradar/pbp/${gameId}`, {
    let playByPlay = fetch(`${url}pbp/${gameId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async response => {
      if (response.status === 202) {
        console.log("data is from file");
      } else if (response.status === 200) {
        console.log("data is from api");
      }
      let parsed = await response.json();
      console.log(parsed);
      return parsed;
    });
    return playByPlay;
  }
};

// // get single game extended summary data
// export const getSingleGameExtendedSummary = async gameId => {
//   console.log("getting extended summary for a single game");
//   if (process.env.REACT_APP_ENVIRONMENT === "LOCAL_CLIENT") {
//     console.log("using local server on 8080");
//     let scores = fetch(
//       `${LOCAL_BASE_URL}/sportradar/game/game-info/extended-summary/${gameId}`
//     ).then(async response => {
//       if (response.status === 202) {
//         console.log("boxscore data is from file");
//       } else if (response.status === 200) {
//         console.log("boxscore data is from api");
//       }
//       let parsed = await response.json();
//       return parsed;
//     });
//     return scores;
//   } else if (gameId) {
//     const url = await process.env.REACT_APP_SERVER_URL;
//     let scores = fetch(
//       `${url}/sportradar/game/game-info/extended-summary/${gameId}`
//     ).then(async response => {
//       if (response.status === 202) {
//         console.log("extended summary data is from file");
//       } else if (response.status === 200) {
//         console.log("extended summary data is from api");
//       }
//       let parsed = await response.json();
//       return parsed;
//     });
//     return scores;
//   }
// };
