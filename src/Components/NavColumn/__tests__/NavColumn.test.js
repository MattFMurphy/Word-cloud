import React from "react";
import { render, screen } from "@testing-library/react";

import NavColumn from "../NavColumn";

const topic = mockTopic();
test("Column renders for a topic", async () => {
  expect.assertions(1);

  render(<NavColumn topic={topic} />);
  const navElement = screen.getByRole("navcolumn");
  expect(navElement).toBeInTheDocument();
});
test("Sentiment Breakdowns", () => {
  render(<NavColumn topic={topic} />);
  const element = screen.getAllByText(/%/i)[0];
  expect(element).toBeInTheDocument();
});
