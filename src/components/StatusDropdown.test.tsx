import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StatusDropdown from "./StatusDropdown";

describe("StatusDropdown", () => {
  it("opens menu and selects a new status", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <StatusDropdown
        value="pending"
        onChange={onChange}
      />
    );

    const selected = screen.getByText(/pending/i);
    await user.click(selected);

    const option = screen.getByText(/in progress/i);
    await user.click(option);

    expect(onChange).toHaveBeenCalledWith(
      "inprogress"
    );
  });
});
