import React from "react";
import { render, screen } from "@testing-library/react";
import BrandRegistrationForm from "./BrandRegistrationForm";

describe("<BrandRegistrationForm />", () => {
  it("should render an input to insert brand value", async () => {
    render(<BrandRegistrationForm />);
    const brandInput = await screen.findByTestId("register-brand-input");
    expect(brandInput).toBeInTheDocument();
  });
  it("should render a button to send new brand value", async () => {
    render(<BrandRegistrationForm />);
    const brandSendButton = await screen.findByTestId("register-brand-button");
    expect(brandSendButton).toBeInTheDocument();
  });
});
