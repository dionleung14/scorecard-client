// this file is an alternative to using netlify's UI to do client-side/deployment env variables
exports.handler = async function (event, context) {
  console.log("we're inside the environments file wassuppppp");
  const value = process.env.REACT_APP_FAVORITE_POKEMON;
  const newValue = process.env.REACT_APP_SERVER_URL;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `DIONNNNNNNNNNN : Value of MY_IMPORTANT_VARIABLE is ${newValue}.`,
    }),
  };
};
