import React from "react";
import { render, screen } from "@testing-library/react";

import Spinner from "../Spinner";

test("Spinner renders", () => {
  render(<Spinner />);
  const spinnerElement = screen.getByRole("spinner");
  expect(spinnerElement).toBeInTheDocument();
});
test("Spinner visible", () => {
  render(<Spinner />);
  const spinnerElement = screen.getByRole("spinner");
  expect(spinnerElement).toBeVisible();
});
