import React from "react";
import { render, screen } from "@testing-library/react";

import ListBrandTable from "./ListBrandTable";
import LoadingProvider from "contexts/LoadingContext";

describe("<ListBrandTable />", () => {
  it("should render an delete button", () => {
    render(
      <LoadingProvider>
        <ListBrandTable />
      </LoadingProvider>
    );
    const brandListDeleteButton = screen.getByRole("button", {
      name: "Excluir",
    });
    expect(brandListDeleteButton).toBeInTheDocument();
  });

  it("should render an update button", () => {
    render(
      <LoadingProvider>
        <ListBrandTable />
      </LoadingProvider>
    );
    const brandListDeleteButton = screen.getByRole("button", {
      name: "Alterar",
    });
    expect(brandListDeleteButton).toBeInTheDocument();
  });

  it("should render an add button", async () => {
    render(
      <LoadingProvider>
        <ListBrandTable />
      </LoadingProvider>
    );
    const brandListDeleteButton = screen.getByRole("button", {
      name: "Incluir",
    });
    expect(brandListDeleteButton).toBeInTheDocument();
  });
});
