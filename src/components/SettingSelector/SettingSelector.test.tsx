import SettingSelector from "./SettingSelector";
import { render, screen } from "@testing-library/react";

describe("SettingSelector", () => {
  test("should render setting selector for Mode correctly", () => {
    render(
      <SettingSelector
        type="modo"
        setting="clasico"
        onSettingClick={() => {}}
        onBack={() => {}}
        onNext={() => {}}
      />
    );

    expect(screen.getByText("clasico")).toBeDefined();
  });

  test("should render setting selector for Beat correctly", () => {
    render(
      <SettingSelector
        type="beat"
        setting="reggae"
        onSettingClick={() => {}}
        onBack={() => {}}
        onNext={() => {}}
      />
    );

    expect(screen.getByText("reggae")).toBeDefined();
  });
});
