import { percentage } from "../Percentage";

test("Percentage returns a valid integer string between 0 and 100%", () => {
  expect(percentage(10, { a: 10, b: 20, c: 20 })).toBe("20%");
});
test("percentage rounds down decimals", () => {
  expect(percentage(13, { a: 13, b: 20, c: 20 })).toBe("24%");
});
