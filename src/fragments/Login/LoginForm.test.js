import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingProvider from "contexts/LoadingContext";
import { BrowserRouter } from "react-router-dom";

import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  it("should render username input", async () => {
    render(
      <BrowserRouter>
        <LoadingProvider>
          <LoginForm />
        </LoadingProvider>
      </BrowserRouter>
    );
    const usernameInput = await screen.findByTestId("login-username-input");
    expect(usernameInput).toBeInTheDocument();
  });

  it("should render password input", async () => {
    render(
      <BrowserRouter>
        <LoadingProvider>
          <LoginForm />
        </LoadingProvider>
      </BrowserRouter>
    );
    const usernameInput = await screen.findByTestId("login-password-input");
    expect(usernameInput).toBeInTheDocument();
  });
});
