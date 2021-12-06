require("@testing-library/jest-dom");

/* global fetch */
import data from "./src/Misc/topics.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);
