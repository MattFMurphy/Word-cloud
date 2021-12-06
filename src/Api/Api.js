/**
 * Grab data from a rest api
 * @argument endPoint -- Api endpoint to grab from
 * @returns Array of data if successful, throws an error if the response can't be de-jsoned
 */
const getTopics = async (endPoint) => {
  let returner;

  await fetch(endPoint)
    .then((response) => response.json())
    .then((json) => {
      // console.log("Fetched:  ", json);
      returner = json;
    })
    .catch((error) => {
      throw ("Can't resolve JSON, ", error);
    });
  return returner;
};

export { getTopics };
