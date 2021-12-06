import { getSentiment } from "../Sentiment";

test("getSentiment returns the correct enum with default boundaries ", () => {
  expect(getSentiment(70)).toBe("POSITIVE");
  expect(getSentiment(35)).toBe("NEGATIVE");
  expect(getSentiment(50)).toBe("NEUTRAL");
});
test("getSentiment returns the correct enum with custom boundaries ", () => {
  expect(getSentiment(92, 90, 20)).toBe("POSITIVE");
  expect(getSentiment(30, 60, 35)).toBe("NEGATIVE");
});
