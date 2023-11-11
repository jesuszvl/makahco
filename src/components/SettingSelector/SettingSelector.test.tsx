import SettingSelector from "./SettingSelector";
import { render, screen } from "@testing-library/react";

describe("SettingSelector", () => {
  test("should render setting selector for Mode correctly", () => {
    render(
      <SettingSelector
        type="modo"
        setting="mode"
        onSettingClick={() => {}}
        onBack={() => {}}
        onNext={() => {}}
      />
    );

    expect(screen.getByText("mode")).toBeDefined();
  });

  test("should render setting selector for Beat correctly", () => {
    render(
      <SettingSelector
        type="beat"
        setting="beat"
        onSettingClick={() => {}}
        onBack={() => {}}
        onNext={() => {}}
      />
    );

    expect(screen.getByText("beat")).toBeDefined();
  });
});
