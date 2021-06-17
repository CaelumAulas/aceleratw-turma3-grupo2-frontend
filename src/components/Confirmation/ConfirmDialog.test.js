import React from "react";
import { render, screen } from "@testing-library/react";

import ConfirmDialog from "./ConfirmDialog";

describe("<ConfirmDialog />", () => {
  it("should render modal opened", () => {
    render(
      <ConfirmDialog
        open={true}
        options={{
          title: "Você tem certeza?",
          description: "",
          confirmationText: "Ok",
          cancellationText: "Voltar",
          dialogProps: {},
          confirmationButtonProps: {},
          cancellationButtonProps: {},
        }}
      />
    );
    const dialogElement = screen.getByTestId("dialog-container");
    expect(dialogElement).toBeInTheDocument();
  });
});
