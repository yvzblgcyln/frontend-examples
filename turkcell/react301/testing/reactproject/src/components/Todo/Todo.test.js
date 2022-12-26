import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo Tests", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("add");
    input = screen.getByPlaceholderText("what to do");
  });

  test("input ve buton dökümanda bulunmali", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  test("varsayilan değerler render edilmeli", () => {
    const items = screen.getAllByText("");
    expect(items.length - 1).toEqual(3);
  });
  test("Inputa giriş yapinca listeye eklenmeli", () => {
    const deneme = "deneme";
    userEvent.type(input, deneme);
    userEvent.click(button);
    expect(screen.getByText(deneme)).toBeInTheDocument();
  });
});
