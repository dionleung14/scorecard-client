import { LOCAL_BASE_URL } from "../../util/constants";
// get the play-by-play data for a given game
export const getPBPForAGame = async gameId => {
  console.log("getting play by play for a game");
  if (process.env.REACT_APP_ENVIRONMENT === "LOCAL_CLIENT") {
    console.log("using local server on 8080");
    let playByPlay = fetch(`${LOCAL_BASE_URL}/sportradar/pbp/${gameId}`, {
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
  } else if (gameId) {
    const url = await process.env.REACT_APP_SERVER_URL;
    let playByPlay = fetch(`${url}sportradar/pbp/${gameId}`, {
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
