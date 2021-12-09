import { getPositioning } from "../getPositioning";

test("Get Positioning", () => {
  let testArray = [1, 2, 3, 4, 5, 6];
  expect(getPositioning(testArray)).toBeInstanceOf(Array);
  expect(getPositioning(testArray)[0]).toBeInstanceOf(Array);
  expect(getPositioning(testArray)[1]).toBeInstanceOf(Array);
  expect(getPositioning(testArray)[0][0] <= 90).toBe(true);
  expect(getPositioning(testArray)[0][0] >= 0).toBe(true);
});
