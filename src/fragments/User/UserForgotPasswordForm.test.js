import React from "react";
import { render, screen } from "@testing-library/react";
import ListUserTable from "./ListUserTable";

describe("<ListUserTable />", () => {
  it("should render an delete button", async () => {
    render(<ListUserTable />);
    const brandListDeleteButton = await screen.findByTestId(
      "user-list-delete-button"
    );
    expect(brandListDeleteButton).toBeInTheDocument();
    expect(brandListDeleteButton).toHaveTextContent("Excluir");
  });

  it("should render an update button", async () => {
    render(<ListUserTable />);
    const brandListDeleteButton = await screen.findByTestId(
      "user-list-update-button"
    );
    expect(brandListDeleteButton).toBeInTheDocument();
    expect(brandListDeleteButton).toHaveTextContent("Alterar");
  });

  it("should render an add button", async () => {
    render(<ListUserTable />);
    const brandListDeleteButton = await screen.findByTestId(
      "user-list-add-button"
    );
    expect(brandListDeleteButton).toBeInTheDocument();
    expect(brandListDeleteButton).toHaveTextContent("Incluir");
  });
});
