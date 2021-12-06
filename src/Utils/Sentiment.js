/**
 * @param score - 0-100 sentiment score
 * @param positiveBoundary  (optional) benchmark for judging positive sentiment
 * @param negativeBoundary  (optional) benchmark for judging negative sentiment
 * @returns An Enum - POSITIVE, NEGATIVE or NEUTRAL based off of where the score fits into the boundaries
 */

const getSentiment = (score, positiveBoundary = 60, negativeBoundary = 40) => {
  if (score > positiveBoundary) {
    return "POSITIVE";
  } else if (score < negativeBoundary) {
    return "NEGATIVE";
  } else {
    return "NEUTRAL";
  }
};

export { getSentiment };
