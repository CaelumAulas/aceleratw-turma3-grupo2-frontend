import React from "react";
import { render, screen } from "@testing-library/react";
import ListVehicleTable from "./ListVehicleTable";

describe("vehicle list", () => {
  it("should render an add button", async () => {
    render(<ListVehicleTable />);
    screen.getByRole("button", { name: "Incluir" });
  });

  it("should render an update button", async () => {
    render(<ListVehicleTable />);
    screen.getByRole("button", { name: "Alterar" });
  });

  describe("table vehicle", () => {
    it("should render table", async () => {
      render(<ListVehicleTable />);
      screen.getByRole("grid", { name: "Veículos" });
    });

    it("should render button search", async () => {
      render(<ListVehicleTable />);
      screen.getByRole("button", { name: "Pesquisar" });
    });

    it("should render column brand", async () => {
      render(<ListVehicleTable />);
      screen.getByRole("columnheader", { name: "Marca" });
    });

    it("should render column model", async () => {
      render(<ListVehicleTable />);
      screen.getByRole("columnheader", { name: "Modelo" });
    });

    it("should render column year", async () => {
      render(<ListVehicleTable />);
      screen.getByRole("columnheader", { name: "Ano" });
    });

    it("should render column value", async () => {
      render(<ListVehicleTable />);
      screen.getByRole("columnheader", { name: "Valor" });
    });
  });
});
