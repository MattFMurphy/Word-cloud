import React from "react";
import Spinner from "../Spinner";
import { render, screen } from "@testing-library/react";

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
