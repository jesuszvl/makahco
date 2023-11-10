import SettingSelector from "./SettingSelector";
import { render, screen } from "@testing-library/react";

describe("SettingSelector", () => {
  test("should render setting selector for Mode correctly", () => {
    render(
      <SettingSelector
        setting="mode"
        onSettingClick={() => {}}
        onBack={() => {}}
        onNext={() => {}}
      />
    );

    expect(screen.getByText("mode")).toBeInTheDocument();
  });

  test("should render setting selector for Beat correctly", () => {
    render(
      <SettingSelector
        setting="beat"
        onSettingClick={() => {}}
        onBack={() => {}}
        onNext={() => {}}
      />
    );

    expect(screen.getByText("beat")).toBeInTheDocument();
  });
});
