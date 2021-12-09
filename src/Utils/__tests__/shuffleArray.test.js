import { shuffle } from "../shuffleArray";

test("Returned array is not the same reference as the prvious one", () => {
  let arr = [1, 3, 4, 2];
  let arr2 = shuffle(arr);
  expect(arr !== arr2).toBe(true);
});

test("Array positions are randomised", () => {
  let array = [1, 4, 5, 7, 2, 8];
  jest.spyOn(global.Math, "random").mockReturnValue(0.123456789);
  //array should be [4, 5, 7, 2, 8, 1] with that seed value
  expect(shuffle(array).join() === [4, 5, 7, 2, 8, 1].join()).toBe(true);
});
