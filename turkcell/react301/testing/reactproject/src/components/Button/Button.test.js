import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./index";
describe("Counter Tests", () => {
  let increaseBtn, count;
  beforeEach(() => {
    render(<Button />);
    increaseBtn = screen.getByText("increase");
    count = screen.getByText("0");
  });
  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });
});
