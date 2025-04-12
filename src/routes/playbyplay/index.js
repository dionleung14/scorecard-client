// This file has the routes matching the play-by-play endpoints on the server
import { LOCAL_BASE_URL } from "../../util/constants";

// get the play-by-play data for a given game
export const getPBPForAGame = async (gameId, saved) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (!saved) {
    console.log("getting play by play for a game");
  } else {
    console.log("getting saved play by play for a sample game");
    options.body = JSON.stringify({ saved: true });
  }
  if (process.env.REACT_APP_ENVIRONMENT === "LOCAL_CLIENT") {
    console.log("using local server on 8080");

    let playByPlay = fetch(`${LOCAL_BASE_URL}/pbp/${gameId}`, options).then(
      async response => {
        if (response.status === 202) {
          console.log("data is from file");
        } else if (response.status === 200) {
          console.log("data is from api");
        }
        let parsed = await response.json();
        console.log(parsed);
        return parsed;
      }
    );
    return playByPlay;
  } else if (gameId) {
    const url = await process.env.REACT_APP_SERVER_URL;
    // let playByPlay = fetch(`${url}pbp/${gameId}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    let playByPlay = fetch(`${url}pbp/${gameId}`, options).then(
      async response => {
        if (response.status === 202) {
          console.log("data is from file");
        } else if (response.status === 200) {
          console.log("data is from api");
        }
        let parsed = await response.json();
        console.log(parsed);
        return parsed;
      }
    );
    return playByPlay;
  }
};
