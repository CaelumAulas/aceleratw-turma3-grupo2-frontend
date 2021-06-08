import React from "react";
import { render, screen } from "@testing-library/react";

import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  it("should render username input", async () => {
    render(<LoginForm />);
    const usernameInput = await screen.findByTestId("login-username-input");
    expect(usernameInput).toBeInTheDocument();
  });

  it("should render password input", async () => {
    render(<LoginForm />);
    const usernameInput = await screen.findByTestId("login-password-input");
    expect(usernameInput).toBeInTheDocument();
  });
});
