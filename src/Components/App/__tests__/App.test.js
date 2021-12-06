import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";

test("App contains spinner on load", () => {
  render(<App />);
  const spinnerElement = screen.getByRole("spinner");
  expect(spinnerElement).toBeInTheDocument();
});
