import React from "react";
import { render } from "@testing-library/react";

import { ContainerFullHeight } from "./ContainerFullHeight";

describe("<ContainerFullHeight />", () => {
  it("should render a div with 100vh height", () => {
    render(
      <ContainerFullHeight>
        <h1 />
      </ContainerFullHeight>
    );
    const container = document.querySelector("div");
    expect(container).toBeInTheDocument();
  });

  it("should render a div with children", () => {
    render(
      <ContainerFullHeight>
        <h1 />
      </ContainerFullHeight>
    );
    const container = document.querySelector("div");
    expect(container.children.length).toBeGreaterThan(0);
  });
});
