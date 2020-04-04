import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Layout from "../index";

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Layout";
  const { queryByText, getByLabelText, getByText } = render(<Layout />);
  console.log(getByText(testMessage));
  expect(getByText(testMessage)).toBe("Layout");
});
