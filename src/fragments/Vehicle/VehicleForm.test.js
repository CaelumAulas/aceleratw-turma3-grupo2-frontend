import React from "react";
import { render, screen } from "@testing-library/react";
import VehicleForm from "./VehicleForm";
import LoadingProvider from "contexts/LoadingContext";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "/veiculos/cadastro",
    search: "",
    hash: "",
    state: undefined,
    key: "5nvxpbdafa",
  }),
  useHistory: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe("vehicle form", () => {
  it("should render an add button", async () => {
    render(
      <LoadingProvider>
        <VehicleForm />
      </LoadingProvider>
    );
    screen.getByRole("button", { name: "Salvar" });
  });

  it("should render an cancel button", async () => {
    render(
      <LoadingProvider>
        <VehicleForm />
      </LoadingProvider>
    );
    screen.getByRole("button", { name: "Cancelar" });
  });

  describe("should render inputs", () => {
    it("should render select brand", async () => {
      render(
        <LoadingProvider>
          <VehicleForm />
        </LoadingProvider>
      );
      const selectBrand = await screen.findByTestId("select-brand");
      expect(selectBrand).toBeInTheDocument();
    });

    it("should render input model", async () => {
      render(
        <LoadingProvider>
          <VehicleForm />
        </LoadingProvider>
      );
      screen.getByRole("textbox", { name: "Modelo" });
    });

    it("should render input year", async () => {
      render(
        <LoadingProvider>
          <VehicleForm />
        </LoadingProvider>
      );
      screen.getByRole("textbox", { name: "Ano" });
    });

    it("should render input value", async () => {
      render(
        <LoadingProvider>
          <VehicleForm />
        </LoadingProvider>
      );
      screen.getByRole("textbox", { name: "Valor" });
    });
  });
});
