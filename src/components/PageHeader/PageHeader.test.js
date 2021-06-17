import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "./PageHeader";

const ComponentToRenderInsideHeader = () => <main></main>;

describe("<PageHeader />", () => {
  it("should render a list of links", async () => {
    render(
      <BrowserRouter>
        <PageHeader>
          <ComponentToRenderInsideHeader />
        </PageHeader>
      </BrowserRouter>
    );
    const listContainer = await screen.findByRole("list");
    expect(listContainer.children.length).toBeGreaterThan(2);
  });
});
