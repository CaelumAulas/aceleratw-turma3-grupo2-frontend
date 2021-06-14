import React from "react";
import { render, screen } from "@testing-library/react";
import VehicleForm from "./VehicleForm";

describe("vehicle form", () => {
  it("should render an add button", async () => {
    render(<VehicleForm />);
    screen.getByRole("button", { name: "Cadastrar" });
  });

  it("should render an cancel button", async () => {
    render(<VehicleForm />);
    screen.getByRole("button", { name: "Cancelar" });
  });

  describe("should render inputs", () => {
    it("should render select brand", async () => {
      render(<VehicleForm />);
      const selectBrand = await screen.findByTestId("select-brand");
      expect(selectBrand).toBeInTheDocument();
    });

    it("should render input model", async () => {
      render(<VehicleForm />);
      screen.getByRole("textbox", { name: "Modelo" });
    });

    it("should render input year", async () => {
      render(<VehicleForm />);
      screen.getByRole("textbox", { name: "Ano" });
    });

    it("should render input value", async () => {
      render(<VehicleForm />);
      screen.getByRole("textbox", { name: "Valor" });
    });
  });
});
