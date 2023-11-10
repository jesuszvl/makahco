import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render app without crashing", () => {
    render(<App />);

    expect(screen.getByText("TAP & RAP")).toBeDefined();
  });
});
