import { render, screen } from "@testing-library/react"
import { Form } from "react-hook-form";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Form", () => {
  it("初期状態ではテキストは空欄", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveTextContent("");
  });

  it("入力したテキストがサブミットされる", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockReturnValue();
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    await user.type(input, "Hello, World!");
    expect(screen.getByDisplayValue("Hello, World!")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);
    expect(alertSpy).toHaveBeenCalledWith("Hello, World!");
    alertSpy.mockRestore();
  });
})