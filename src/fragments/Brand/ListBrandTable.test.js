import React from "react";
import { render, screen } from "@testing-library/react";

import ListBrandTable from "./ListBrandTable";
import LoadingProvider from "contexts/LoadingContext";

describe("<ListBrandTable />", () => {
  it("should render an delete button", async () => {
    render(
      <LoadingProvider>
        <ListBrandTable />
      </LoadingProvider>
    );
    const brandListDeleteButton = await screen.findByTestId(
      "brand-list-delete-button"
    );
    expect(brandListDeleteButton).toBeInTheDocument();
    expect(brandListDeleteButton).toHaveTextContent("Excluir");
  });

  it("should render an update button", async () => {
    render(
      <LoadingProvider>
        <ListBrandTable />
      </LoadingProvider>
    );
    const brandListDeleteButton = await screen.findByTestId(
      "brand-list-update-button"
    );
    expect(brandListDeleteButton).toBeInTheDocument();
    expect(brandListDeleteButton).toHaveTextContent("Alterar");
  });

  it("should render an add button", async () => {
    render(
      <LoadingProvider>
        <ListBrandTable />
      </LoadingProvider>
    );
    const brandListDeleteButton = await screen.findByTestId(
      "brand-list-add-button"
    );
    expect(brandListDeleteButton).toBeInTheDocument();
    expect(brandListDeleteButton).toHaveTextContent("Incluir");
  });
});
