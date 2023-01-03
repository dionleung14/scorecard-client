// get the play-by-play data for a given game
export const getPBPForAGame = async gameId => {
  if (gameId) {
    console.log("getting play by play for a game");
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
