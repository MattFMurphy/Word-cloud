import {
  categorizeTopicsMean,
  categorizeTopicsPercentiles,
} from "../categorizeTopics";

test("volumeRank property is assigned correctly to topics", async () => {
  expect.assertions(3);
  //console.log(typeof topics);
  const topics = mockTopics;
  const categorizedTopics = categorizeTopicsPercentiles(topics);
  const randomTopic =
    topics[Math.floor(Math.random() * categorizedTopics.length)];
  expect(randomTopic.volumeRank <= 6 && randomTopic.volumeRank >= 1).toBe(true);
  expect(categorizedTopics[0].volumeRank).toBe(1);
  expect(categorizedTopics[categorizedTopics.length - 1].volumeRank).toBe(6);
});
