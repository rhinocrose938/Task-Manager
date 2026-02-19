import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <SearchBar value="" onChange={handleChange} />
    );

    const input = screen.getByPlaceholderText(
      /search to-do/i
    );

    await user.type(input, "task");

    expect(handleChange).toHaveBeenCalled();
  });
});
