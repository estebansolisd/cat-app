import { render, screen } from "@testing-library/react";
import CatAuthForm from "../CatAuthForm";

test("renders the register variant", () => {
  render(<CatAuthForm variant="register" />);

  expect(screen.getByRole("textbox", { name: "name" })).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", {
      name: "password_confirmation",
    })
  ).toBeInTheDocument();
});

test("renders the login variant", () => {
  render(<CatAuthForm variant="login" />);

  expect(
    screen.queryByRole("textbox", {
      name: "password_confirmation",
    })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("textbox", { name: "name" })
  ).not.toBeInTheDocument();
});
