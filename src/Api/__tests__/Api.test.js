import { getTopics } from "../Api";

test("Get topic returns an array when resolved", async () => {
  expect.assertions(1);
  const data = await getTopics("./topics.json");
  expect(data.topics).toBeInstanceOf(Array);
});
