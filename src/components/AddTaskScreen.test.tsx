import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTaskScreen from "./AddTaskScreen";

describe("AddTaskScreen", () => {
  it("submits new task when title is entered", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();

    render(
      <AddTaskScreen
        onAdd={onAdd}
        onCancel={() => {}}
      />
    );

    await user.type(
      screen.getByPlaceholderText(/enter the title/i),
      "New task"
    );

    const addButton = screen.getByRole("button", {
      name: /add/i,
    });

    await user.click(addButton);

    expect(onAdd).toHaveBeenCalledWith(
      "New task",
      ""
    );
  });
});
