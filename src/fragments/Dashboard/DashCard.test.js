import React from "react";
import { render, screen } from "@testing-library/react";

import DashCard from "./DashCard";

describe("<DashCard />", () => {
  it("should render brand element", async () => {
    render(<DashCard brand="fiat" quantity={10} value={200} />);
    const brandElement = await screen.findByRole("heading");
    expect(brandElement).toHaveTextContent(/fiat/i);
  });

  it("should render quantity element", async () => {
    render(<DashCard brand="fiat" quantity={10} value={200} />);
    const brandElement = await screen.findByTestId("dashcard-quantity");
    expect(brandElement).toHaveTextContent("10");
  });

  it("should render value element", async () => {
    render(<DashCard brand="fiat" quantity={10} value={200} />);
    const brandElement = await screen.findByTestId("dashcard-price");
    expect(brandElement).toHaveTextContent("R$ 200,00");
  });
});
