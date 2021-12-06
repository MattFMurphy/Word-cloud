/**
 * Catch all api class
 */

/**
 * Grab data from a rest api
 * @argument endPoint -- Api endpoint to grab from
 * @returns Array of data if successful, false otherwise
 */
const getTopics = async (endPoint) => {
  let returner;

  await fetch(endPoint)
    .then((response) => response.json())
    .then((json) => {
      // console.log("Fetched:  ", json);
      returner = json;
    });
  return returner;
};

export { getTopics };
