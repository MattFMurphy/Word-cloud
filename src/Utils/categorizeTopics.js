/**
 *
 * @param {*} topics - input topics
 * @returns topics, sorted in numerically ascending order by volume
 */
const sortTopics = (topics) => {
  return topics.sort((a, b) => {
    return a.volume - b.volume;
  });
};

/**
 *
 * @param {*} topics - input topics
 * @returns an array containing the volume at every 1/6th percentile.
 */
const getSixthMedians = (topics) => {
  let pointer = Math.floor(topics.length / 6);
  let mediansArray = [];
  let i;
  for (i = 1; i <= 6; i++) {
    let index = pointer * i - 1;
    mediansArray.push(topics[index].volume);
  }
  return mediansArray;
};

/**
 * Adds a ranking property to topics based off of mean volume
 * @param {*} topics - input topics with volume attribute
 * @returns topics with a volumeRank property between 1 and 6 added to each topic based of off that topics volume
 */
const categorizeTopicsMean = (topics) => {
  topics = sortTopics(topics);
  const maxVolume = Math.max.apply(
    Math,
    topics.map((topic) => topic.volume)
  );

  return topics.map((topic) => {
    const { volume } = topic;
    let volumeRank;

    if (volume < maxVolume / 6) {
      volumeRank = 1;
    } else if (volume < 2 * (maxVolume / 6)) {
      volumeRank = 2;
    } else if (volume < 3 * (maxVolume / 6)) {
      volumeRank = 3;
    } else if (volume < 4 * (maxVolume / 6)) {
      volumeRank = 4;
    } else if (volume < 5 * (maxVolume / 6)) {
      volumeRank = 5;
    } else {
      volumeRank = 6;
    }
    topic.volumeRank = volumeRank;
    return topic;
  });
};

/**
 * Order topics array in ascending order then get every 1/6 index and apply rank by that (to deal with high skew)
 * @param {*} topics - input topics with volume attribute
 * @returns topics with a volumeRank property between 1 and 6 added to each topic based of off that topics volume
 */
const categorizeTopicsPercentiles = (topics) => {
  topics = sortTopics(topics);
  const sixthMedians = getSixthMedians(topics);
  return topics.map((topic) => {
    const { volume } = topic;
    let volumeRank;
    if (volume <= sixthMedians[0]) {
      volumeRank = 1;
    } else if (volume <= sixthMedians[1]) {
      volumeRank = 2;
    } else if (volume <= sixthMedians[2]) {
      volumeRank = 3;
    } else if (volume <= sixthMedians[3]) {
      volumeRank = 4;
    } else if (volume <= sixthMedians[4]) {
      volumeRank = 5;
    } else {
      volumeRank = 6;
    }
    topic.volumeRank = volumeRank;
    return topic;
  });
};
export { categorizeTopicsMean, categorizeTopicsPercentiles };
