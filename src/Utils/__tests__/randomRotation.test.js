import { randomRotation } from "../randomRotation";

test("Random rotation returns an angle between to numbers rounded to the nearest 10", () => {
  const randomRot = randomRotation();
  expect(Number.isInteger(randomRot)).toBe(true);
  expect(randomRotation() % 10).toBe(0);
});
