import { LOCAL_BASE_URL } from "../../util/constants";

export const submitFeedbackForm = async formData => {
  console.log(`submitting a feedback form for gameId: ${formData.gameId}`);
  if (process.env.REACT_APP_ENVIRONMENT === "LOCAL_CLIENT") {
    console.log("using local server on 8080");
    let response = fetch(`${LOCAL_BASE_URL}/feedback`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async response => {
        if (response.status === 202) {
          console.log("data is from file");
        } else if (response.status === 200) {
          console.log("data is from api");
        }
        return response.status;
        // let parsed = await response.json();
        // console.log(parsed);
        // return parsed;
      })
      .catch(e => {
        console.error(e);
      });
    return response;
  } else if (formData) {
    const url = await process.env.REACT_APP_SERVER_URL;
    let response = fetch(`${url}feedback`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async response => {
        if (response.status === 202) {
          console.log("data is from file");
        } else if (response.status === 200) {
          console.log("data is from api");
        }
        // let parsed = await response.json();
        // console.log(parsed);
        // return parsed;
      })
      .catch(e => {
        console.error(e);
      });
    return response;
  }
};
