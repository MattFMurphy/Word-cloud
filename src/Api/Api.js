/**
 * Grab data from a rest api
 * @argument endPoint -- Api endpoint to grab from
 * @returns Array of data if successful, throws an error if the response can't be de-jsoned
 */
const getTopics = async (endPoint) => {
  return fetch(endPoint)
    .then((response) => response.json())
    .then((json) => {
      // console.log("Fetched:  ", json);
      return json;
    })
    .catch((error) => {
      throw ("Can't resolve JSON, ", error);
    });
};

export { getTopics };
