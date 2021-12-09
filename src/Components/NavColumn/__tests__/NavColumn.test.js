import React from "react";
import { render, screen } from "@testing-library/react";

import NavColumn from "../NavColumn";

test("Column renders for a topic", async () => {
  const topic = mockTopic();
  expect.assertions(1);

  render(<NavColumn activeTopic={topic} />);
  const navElement = screen.getByRole("navcolumn");
  expect(navElement).toBeInTheDocument();
});
test("Sentiment Breakdowns", () => {
  const topic = mockTopic();

  render(<NavColumn activeTopic={topic} />);
  const element = screen.getAllByText(/%/i)[0];
  expect(element).toBeInTheDocument();
});
